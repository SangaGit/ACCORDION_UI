import { trigger, state, style, transition, animate } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'dl-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('contentExpansion', [
      state(
        'expanded',
        style({ height: '*', opacity: 1, visibility: 'visible' })
      ),
      state(
        'collapsed',
        style({ height: '0px', opacity: 0, visibility: 'hidden' })
      ),
      transition(
        'expanded <=> collapsed',
        animate('200ms cubic-bezier(.37,1.04,.68,.98)')
      ),
    ]),
  ]
})
export class AccordionComponent implements OnInit {

  @Input() collapse = true;
  @Input() data: any[] = [];
  expanded = new Set<number>();
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(simpleChanges : SimpleChanges){
    /** expand first element immediately when data loads */
    if(simpleChanges['data'] && simpleChanges['data'].previousValue !== simpleChanges['data'].currentValue ){
      this.toggleState(0);
    }
  }

  toggleState = (index: number) => {
    if (this.expanded.has(index)) {
      this.expanded.delete(index);
    } else {
      if (this.collapse) {
        this.expanded.clear();
      }
      this.expanded.add(index);
    }
  };

}
