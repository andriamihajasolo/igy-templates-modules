import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/common";
// interface Food {
//   value: string;
//   viewValue: string;
// }
// interface Car {
//   value: string;
//   viewValue: string;
// }
export class SelectComponent {
    constructor() {
        /** liste des données dans  */
        this.data = [];
        /** nom du champ a afficher sur la liste select */
        this.viewValue = 'name';
        /** label de l'element select */
        this.label = 'Select';
        /** message d'erreur à afficher */
        this.errorMsg = '';
        /** nom select **/
        this.name = '';
        // Class personaliser
        this.customClass = 'no-animate-label';
        /** évènement selectionChange */
        this.change = new EventEmitter();
    }
    ngOnInit() { }
    selectionValue(value) {
        this.change.emit(value);
    }
}
SelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: SelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.1", type: SelectComponent, selector: "igy-select", inputs: { data: "data", viewValue: "viewValue", label: "label", errorMsg: "errorMsg", name: "name", customClass: "customClass" }, outputs: { change: "change" }, ngImport: i0, template: "<div class=\"item-input-container\" [class]=\"customClass\">\r\n  <label>{{label}}</label>\r\n  <mat-form-field appearance=\"fill\">\r\n    <mat-label>{{ label }}</mat-label>\r\n    <mat-select (selectionChange)=\"selectionValue($event.value)\">\r\n      <mat-option *ngFor=\"let element of data\" [value]=\"element.value\">\r\n        {{ element.text }}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <div class=\"item-validation-container\">\r\n    <span class=\"field-has-error\">\r\n      {{ errorMsg }}\r\n    </span>\r\n  </div>\r\n</div>\r\n", styles: [":host ::ng-deep .mat-form-field{width:100%}:host ::ng-deep .mat-form-field .mat-form-field-flex{padding:0}:host ::ng-deep .mat-form-field .mat-form-field-infix{padding:.4375em 10px}:host ::ng-deep .mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-20%)}:host ::ng-deep .mat-form-field-label-wrapper{top:0;left:10px}:host ::ng-deep .mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,:host ::ng-deep .mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.4815em) scale(.85) perspective(100px) translateZ(-.6em);font-size:15px;left:-10px}:host ::ng-deep .mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label span,:host ::ng-deep .mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label mat-label,:host ::ng-deep .mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label span,:host ::ng-deep .mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label mat-label{background-color:#fff;padding:5px 10px;top:2px;left:10px;position:relative;color:#333;font-weight:600}:host ::ng-deep .no-animate-label .mat-focused .mat-form-field-label,:host ::ng-deep .no-animate-label .mat-form-field-should-float .mat-form-field-label{display:none!important}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: SelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'igy-select', template: "<div class=\"item-input-container\" [class]=\"customClass\">\r\n  <label>{{label}}</label>\r\n  <mat-form-field appearance=\"fill\">\r\n    <mat-label>{{ label }}</mat-label>\r\n    <mat-select (selectionChange)=\"selectionValue($event.value)\">\r\n      <mat-option *ngFor=\"let element of data\" [value]=\"element.value\">\r\n        {{ element.text }}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <div class=\"item-validation-container\">\r\n    <span class=\"field-has-error\">\r\n      {{ errorMsg }}\r\n    </span>\r\n  </div>\r\n</div>\r\n", styles: [":host ::ng-deep .mat-form-field{width:100%}:host ::ng-deep .mat-form-field .mat-form-field-flex{padding:0}:host ::ng-deep .mat-form-field .mat-form-field-infix{padding:.4375em 10px}:host ::ng-deep .mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-20%)}:host ::ng-deep .mat-form-field-label-wrapper{top:0;left:10px}:host ::ng-deep .mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,:host ::ng-deep .mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.4815em) scale(.85) perspective(100px) translateZ(-.6em);font-size:15px;left:-10px}:host ::ng-deep .mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label span,:host ::ng-deep .mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label mat-label,:host ::ng-deep .mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label span,:host ::ng-deep .mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label mat-label{background-color:#fff;padding:5px 10px;top:2px;left:10px;position:relative;color:#333;font-weight:600}:host ::ng-deep .no-animate-label .mat-focused .mat-form-field-label,:host ::ng-deep .no-animate-label .mat-form-field-should-float .mat-form-field-label{display:none!important}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { data: [{
                type: Input
            }], viewValue: [{
                type: Input
            }], label: [{
                type: Input
            }], errorMsg: [{
                type: Input
            }], name: [{
                type: Input
            }], customClass: [{
                type: Input
            }], change: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2lneS10ZW1wbGF0ZXMtbW9kdWxlcy9zcmMvbGliL2NvbXBvc2FudHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pZ3ktdGVtcGxhdGVzLW1vZHVsZXMvc3JjL2xpYi9jb21wb3NhbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBRy9FLG1CQUFtQjtBQUNuQixtQkFBbUI7QUFDbkIsdUJBQXVCO0FBQ3ZCLElBQUk7QUFDSixrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLHVCQUF1QjtBQUN2QixJQUFJO0FBT0osTUFBTSxPQUFPLGVBQWU7SUFzQjFCO1FBckJBLDhCQUE4QjtRQUNyQixTQUFJLEdBQVUsRUFBRSxDQUFDO1FBRTFCLGtEQUFrRDtRQUN6QyxjQUFTLEdBQVcsTUFBTSxDQUFDO1FBRXBDLGdDQUFnQztRQUN2QixVQUFLLEdBQVcsUUFBUSxDQUFDO1FBRWxDLGtDQUFrQztRQUN6QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBRS9CLGtCQUFrQjtRQUNULFNBQUksR0FBVyxFQUFFLENBQUM7UUFFM0IscUJBQXFCO1FBQ1osZ0JBQVcsR0FBVyxrQkFBa0IsQ0FBQztRQUVsRCxnQ0FBZ0M7UUFDdEIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFFNUIsQ0FBQztJQUVoQixRQUFRLEtBQVUsQ0FBQztJQUVuQixjQUFjLENBQUMsS0FBVTtRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs0R0E1QlUsZUFBZTtnR0FBZixlQUFlLG1OQ2pCNUIsK2pCQWdCQTsyRkRDYSxlQUFlO2tCQUwzQixTQUFTOytCQUNFLFlBQVk7MEVBTWIsSUFBSTtzQkFBWixLQUFLO2dCQUdHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBR0csS0FBSztzQkFBYixLQUFLO2dCQUdHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBR0csSUFBSTtzQkFBWixLQUFLO2dCQUdHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBR0ksTUFBTTtzQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbi8vIGludGVyZmFjZSBGb29kIHtcclxuLy8gICB2YWx1ZTogc3RyaW5nO1xyXG4vLyAgIHZpZXdWYWx1ZTogc3RyaW5nO1xyXG4vLyB9XHJcbi8vIGludGVyZmFjZSBDYXIge1xyXG4vLyAgIHZhbHVlOiBzdHJpbmc7XHJcbi8vICAgdmlld1ZhbHVlOiBzdHJpbmc7XHJcbi8vIH1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaWd5LXNlbGVjdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2VsZWN0LmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKiBsaXN0ZSBkZXMgZG9ubsOpZXMgZGFucyAgKi9cclxuICBASW5wdXQoKSBkYXRhOiBhbnlbXSA9IFtdO1xyXG5cclxuICAvKiogbm9tIGR1IGNoYW1wIGEgYWZmaWNoZXIgc3VyIGxhIGxpc3RlIHNlbGVjdCAqL1xyXG4gIEBJbnB1dCgpIHZpZXdWYWx1ZTogc3RyaW5nID0gJ25hbWUnO1xyXG5cclxuICAvKiogbGFiZWwgZGUgbCdlbGVtZW50IHNlbGVjdCAqL1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnU2VsZWN0JztcclxuXHJcbiAgLyoqIG1lc3NhZ2UgZCdlcnJldXIgw6AgYWZmaWNoZXIgKi9cclxuICBASW5wdXQoKSBlcnJvck1zZzogc3RyaW5nID0gJyc7XHJcblxyXG4gIC8qKiBub20gc2VsZWN0ICoqL1xyXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZyA9ICcnO1xyXG5cclxuICAvLyBDbGFzcyBwZXJzb25hbGlzZXJcclxuICBASW5wdXQoKSBjdXN0b21DbGFzczogc3RyaW5nID0gJ25vLWFuaW1hdGUtbGFiZWwnO1xyXG5cclxuICAvKiogw6l2w6huZW1lbnQgc2VsZWN0aW9uQ2hhbmdlICovXHJcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge31cclxuXHJcbiAgc2VsZWN0aW9uVmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJpdGVtLWlucHV0LWNvbnRhaW5lclwiIFtjbGFzc109XCJjdXN0b21DbGFzc1wiPlxyXG4gIDxsYWJlbD57e2xhYmVsfX08L2xhYmVsPlxyXG4gIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxyXG4gICAgPG1hdC1sYWJlbD57eyBsYWJlbCB9fTwvbWF0LWxhYmVsPlxyXG4gICAgPG1hdC1zZWxlY3QgKHNlbGVjdGlvbkNoYW5nZSk9XCJzZWxlY3Rpb25WYWx1ZSgkZXZlbnQudmFsdWUpXCI+XHJcbiAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBlbGVtZW50IG9mIGRhdGFcIiBbdmFsdWVdPVwiZWxlbWVudC52YWx1ZVwiPlxyXG4gICAgICAgIHt7IGVsZW1lbnQudGV4dCB9fVxyXG4gICAgICA8L21hdC1vcHRpb24+XHJcbiAgICA8L21hdC1zZWxlY3Q+XHJcbiAgPC9tYXQtZm9ybS1maWVsZD5cclxuICA8ZGl2IGNsYXNzPVwiaXRlbS12YWxpZGF0aW9uLWNvbnRhaW5lclwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJmaWVsZC1oYXMtZXJyb3JcIj5cclxuICAgICAge3sgZXJyb3JNc2cgfX1cclxuICAgIDwvc3Bhbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==