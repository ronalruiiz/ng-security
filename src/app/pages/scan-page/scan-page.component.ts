import {Component, OnInit} from '@angular/core';
import {NessusService} from 'src/app/services/nessus.service';
import {map} from 'rxjs/operators';
import {element} from 'protractor';


@Component({
    selector: 'app-scan-page',
    templateUrl: './scan-page.component.html',
    styleUrls: ['./scan-page.component.scss']
})
export class ScanPageComponent implements OnInit {

    public displayedColumns: string[] = ['user', 'name', 'creation_date', 'status', 'action'];
    public dataSource = [];

    constructor(private _nessusService: NessusService) {
        this._nessusService.getScans().pipe(map((e: any) => e.scans)).subscribe(e => {
            this.dataSource = e;
        });
    }

    ngOnInit() {
    }

    executeScan(idScan) {
        this._nessusService.launchScan(idScan.id).subscribe(e => {
           console.log(e);
        });
    }
}
