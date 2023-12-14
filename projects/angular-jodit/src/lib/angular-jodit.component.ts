import {
  AfterViewInit,
  Component, effect, EffectRef,
  ElementRef,
  forwardRef,
  Input,
  OnDestroy, signal,
  ViewChild,
  WritableSignal
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Jodit} from "jodit";

@Component({
  selector: 'angular-jodit',
  standalone: true,
  imports: [],
  template: `<textarea #editor></textarea>`,
  styles: ``,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AngularJoditComponent),
    multi: true
  }]
})
export class AngularJoditComponent implements AfterViewInit, ControlValueAccessor, OnDestroy {
  @ViewChild('editor') editorElement!: ElementRef;
  @Input() options: any;

  private editor: Jodit | undefined = undefined;

  private readonly editorText: WritableSignal<string> = signal<string>('');
  private readonly editorReady: WritableSignal<boolean> = signal<boolean>(!!this.editor?.isReady);
  private readonly valueChanges: EffectRef = effect(() => {
    if (this.editorReady()) {
      this.editor!.value = this.editorText();
    }
  });

  private onChange: any = (): void => {
  };
  private onTouched: any = (): void => {
  };

  constructor() {
  }

  ngAfterViewInit(): void {
    this.editor = Jodit.make(this.editorElement.nativeElement, this.options);
    this.editor.events.on('change', this.onChange);
    this.editorReady.set(this.editor.isReady);
  }

  writeValue(value: string): void {
    this.editorText.set(value || '');
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (this.editor) {
      this.editor.setDisabled(isDisabled);
    }
  }

  ngOnDestroy(): void {
    this.valueChanges.destroy();
    this.editor?.destruct();
  }

}
