import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryComponent } from './library.component';
import { LibraryResolverService } from './resolvers/library-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: LibraryComponent,
    resolve: {
      library: LibraryResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule {
}
