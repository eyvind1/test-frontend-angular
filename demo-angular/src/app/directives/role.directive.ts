import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRole]'
})

export class RoleDirective implements OnInit {

  private role : string = 'Admin';
  private permissions: string = '';
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) { }
    ngOnInit(): void {
      this.role = 'Admin'
    }

    @Input() set appRole(val: string) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.permissions = val;
      this.updateView();
    }

    private updateView(): void {
      this.viewContainer.clear();
      if(this.checkPermissions()) {
        this.viewContainer.createEmbeddedView(this.templateRef)
      }
    }

    private checkPermissions(): boolean {
      let hasPermission = false;
      if (this.role == this.permissions) {
        hasPermission = true;
      }
      return hasPermission;
    }
}
