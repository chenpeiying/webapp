import { NgModule } from '@angular/core';
import { AComponent } from './a/a';
import { BComponent } from './b/b';
import { CComponent } from './c/c';
import { DComponent } from './d/d';
@NgModule({
	declarations: [AComponent,
    BComponent,
    CComponent,
    DComponent],
	imports: [],
	exports: [AComponent,
    BComponent,
    CComponent,
    DComponent]
})
export class ComponentsModule {}
