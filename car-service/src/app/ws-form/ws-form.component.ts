import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core/src/metadata/di';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Worksheet } from '../worksheet';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-ws-form',
  templateUrl: './ws-form.component.html',
  styleUrls: ['./ws-form.component.css']
})
export class WsFormComponent implements OnChanges {
  @ViewChild(NgForm) f : NgForm;
  model : Worksheet = null;
  @Input() ws : Worksheet = null;

  @Output() onSubmit = new EventEmitter<Worksheet>();
  @Output() onReset = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
    this.model = Object.assign({}, this.ws);
  }

  ngOnChanges() {
    this.model = Object.assign({}, this.ws);
  }

  submit(f) {
    if (!f.valid) {
      return;
    }
    this.onSubmit.emit(this.model);
  }

  reset() {
    this.onReset.emit();
  }
}
