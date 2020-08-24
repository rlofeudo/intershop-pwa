import { NgModule } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from 'ish-shared/shared.module';

import { BudgetBarComponent } from './components/budget-bar/budget-bar.component';
import { RequisitionBuyerApprovalComponent } from './components/requisition-buyer-approval/requisition-buyer-approval.component';
import { RequisitionRejectDialogComponent } from './components/requisition-reject-dialog/requisition-reject-dialog.component';
import { RequisitionSummaryComponent } from './components/requisition-summary/requisition-summary.component';
import { RequisitionsListComponent } from './components/requisitions-list/requisitions-list.component';
import { ApproverPageComponent } from './pages/approver/approver-page.component';
import { BuyerPageComponent } from './pages/buyer/buyer-page.component';
import { RequisitionDetailPageComponent } from './pages/requisition-detail/requisition-detail-page.component';
import { RequisitionManagementRoutingModule } from './pages/requisition-management-routing.module';
import { RequisitionManagementStoreModule } from './store/requisition-management-store.module';

@NgModule({
  declarations: [
    ApproverPageComponent,
    BudgetBarComponent,
    BuyerPageComponent,
    RequisitionBuyerApprovalComponent,
    RequisitionDetailPageComponent,
    RequisitionRejectDialogComponent,
    RequisitionSummaryComponent,
    RequisitionsListComponent,
  ],
  imports: [
    NgbNavModule,
    RequisitionManagementRoutingModule,
    RequisitionManagementStoreModule,
    SharedModule,
  ],
})
export class RequisitionManagementModule {}
