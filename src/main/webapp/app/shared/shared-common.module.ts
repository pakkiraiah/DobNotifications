import { NgModule } from '@angular/core';

import { DobNotificationsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [DobNotificationsSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [DobNotificationsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class DobNotificationsSharedCommonModule {}
