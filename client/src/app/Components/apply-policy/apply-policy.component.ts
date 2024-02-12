import { Component } from '@angular/core';
import { PolicyService } from '../policy/policy.service'
@Component({
  selector: 'app-apply-policy',
  templateUrl: './apply-policy.component.html',
  styleUrl: './apply-policy.component.css'
})
export class ApplyPolicyComponent {

  policies: any[] = [];
  constructor(private policyService: PolicyService) { }

  ngOnInit(): void {
    this.loadPolicies();
  }

  loadPolicies(): void {
    // Fetch policies from the service
    this.policyService.getpolicy().subscribe(
      (data: any) => {
        this.policies = data;
      },
      (error) => {
        console.error('Error fetching policies:', error);
      }
    );
  }
  applyForPolicy(policy: any) {
    // console.log(policy.PolicyCategory);
    alert(`${policy.PolicyCategory} Policy Apply Sucessfuly.` );
    throw new Error('Method not implemented.');
  }

}
