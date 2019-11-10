import { DetailService } from './../../services/detail.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  dataShow: any;

  constructor(
    private route: ActivatedRoute,
    private detailService: DetailService
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id !== 'undefined') {
      const res: any = await this.detailService.getDetail();
      // console.log(res);
      const details = res.details;
      details.forEach(el => {
        if (el.id === id) {
          this.dataShow = el.id;
        }
      });
      if (!this.dataShow) {
        this.dataShow = 'Please Fill Again';
      }
    } else {
      this.dataShow = 'please Fill ID';
    }
  }

}
