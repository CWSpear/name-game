import { Directive, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Directive({
  selector: '[appRedirect]',
})
export class RedirectDirective implements OnInit {
  @Input() commands: any[];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.router.navigate(this.commands, { relativeTo: this.route });
  }
}
