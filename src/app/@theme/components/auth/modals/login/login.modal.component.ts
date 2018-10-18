import {Component, EventEmitter, OnInit, Output, PLATFORM_ID, Inject} from "@angular/core";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SignupModalComponent} from "../signup/signup.modal.component";
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';
import {SharedService} from "../../../../../shared-service";
import {isPlatformServer} from "@angular/common";


@Component({
  selector: 'ngx-login-modal',
  templateUrl: './login.modal.component.html'
})
export class LoginModalComponent implements OnInit {
  loginForm: FormGroup;
  isServer: boolean = false;

  @Output() onSuccess: EventEmitter<any> = new EventEmitter();
  @Output() openRegisterModal$: EventEmitter<any> = new EventEmitter();

  constructor(private activeModal: NgbActiveModal,
              @Inject(PLATFORM_ID) platformId,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService,
              private modalService: NgbModal,
              private http: HttpClient) {
    this.isServer = isPlatformServer(platformId);
  }

  ngOnInit() {
    this.buildLoginForm();
  }

  closeModal(): void {
    // this.router.navigateByUrl('/pages/product-attributes/list');
    this.activeModal.close();
  }

  onSubmit(): void {
    this.login(this.loginForm.getRawValue()).subscribe((res: any)=> {
      this.sharedService.setCurrentUser(res.data);
      if (!this.isServer) {
        window.location.reload();
      }
      this.activeModal.close(res);
    });
  }

  login(userCrediential: any): Observable<any> {
    return this.http.post(`/auth/signin`, userCrediential);
  }

  buildLoginForm(): void {
    this.loginForm = this.fb.group({
      usernameOrEmail: 'ahmad_ali_mohammad',
      password: 'Aadmin@1234'
    })
  }

  openRegisterModal(evt) {
    this.openRegisterModal$.next();
  }
}
