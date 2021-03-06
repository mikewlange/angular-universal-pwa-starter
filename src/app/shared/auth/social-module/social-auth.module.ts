import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CustomMaterialModule } from '../../custom-material-module/index';

import { routes } from './social-auth.routing';
import { SocialAuthService } from './social-auth.service';
import { SocialAuthSignInComponent } from './components/social-auth-sign-in.component';

@NgModule({
    declarations: [SocialAuthSignInComponent],
    imports: [CommonModule, RouterModule.forChild(routes), CustomMaterialModule],
    providers: [SocialAuthService],
})
export class SocialAuthModule {}
