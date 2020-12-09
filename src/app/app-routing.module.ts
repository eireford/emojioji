import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
    { path: 'quote', loadChildren: () => import('./quote/quote.module').then(m => m.QuoteModule) },
    { path: 'upload', loadChildren: () => import('./upload/upload.module').then(m => m.UploadModule) },
    { path: 'storage', loadChildren: () => import('./storage/storage.module').then(m => m.StorageModule) }
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
