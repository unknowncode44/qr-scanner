import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { selectRole } from '../state/app.state';
import { Store } from '@ngrx/store';

@Directive({
  selector: '[appRolePermissions]'
})
export class RolePermissionsDirective {

  private role: any[] = []
  private permissions: any[] = []

  constructor(
    private templateRef: TemplateRef<any>, // Se encargan de renderizar la vista
    private viewContainer: ViewContainerRef, // Es parecido al ngIf, pero personalizado
    private cookieService: CookieService, // Ingresamos a las cookies
    private store: Store,
  ) {
    this.store.select(selectRole).subscribe(role => 
      {
      //? solo un tema, cada vez que la directiva se ejecuta se suscribe al evento
        
      console.log(role);
      
      this.role = [`${role}`]
      //! LISTO PERRRRRRIII // de unaaaaa perrito loco de mierda
       
      } )
  }

  ngOnInit(){
    this.updateView()
  }

  @Input()
  set appRolePermissions(permissions: Array<string>) {
    this.viewContainer.createEmbeddedView(this.templateRef) //templateRef hacer referencia al elemento HTML
    this.permissions = permissions
  
    this.updateView()
  }

  private updateView() { //! SE ENCARGA DE MOSTRAS LAS VISTAS SI ES QUE TIENE LOS PERMISOS
    this.viewContainer.clear()
    if (this.checkPermissions()) {
      this.viewContainer.createEmbeddedView(this.templateRef)
    }
  }

  private checkPermissions(): boolean {
    let hasPermission = false
    if (this.role) {
      for (const checkPermission of this.permissions) { //! CHEQUEAMOS SI ESTA EN LA LISTA DE PERMISOS
        const permissionFound = this.role.find((p: string) => {
          return (p === checkPermission)
        })

        if (permissionFound) {
          hasPermission = true
          break
        }
      }
    }
    return hasPermission
  }
}

