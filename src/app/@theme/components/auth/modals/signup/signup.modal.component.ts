import {Component, EventEmitter, OnInit, Output, PLATFORM_ID, Inject} from "@angular/core";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../auth.service";
import {LoginModalComponent} from "../login/login.modal.component";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {SharedService} from "../../../../../shared-service";
import {isPlatformServer} from "@angular/common";

@Component({
  selector: 'ngx-signup-modal',
  templateUrl: './signup.modal.component.html'
})
export class SignupModalComponent implements OnInit {
  signupForm: FormGroup;
  isServer: boolean = false;

  @Output() onSuccess: EventEmitter<any> = new EventEmitter();
  @Output() openLoginModal$: EventEmitter<any> = new EventEmitter();

  constructor(private activeModal: NgbActiveModal,
              private fb: FormBuilder,
              @Inject(PLATFORM_ID) platformId,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService,
              private modalService: NgbModal,
              private http: HttpClient) {
    this.isServer = isPlatformServer(platformId);
  }

  ngOnInit() {
    this.buildSignupForm();
  }

  closeModal(): void {
    // this.router.navigateByUrl('/pages/product-attributes/list');
    this.activeModal.close();
  }

  onSubmit(): void {
    this.register(this.signupForm.getRawValue()).subscribe((res: any)=> {
      this.sharedService.setCurrentUser(res.data);
      if (!this.isServer) {
        window.location.reload();
      }
      this.activeModal.close(res);
    });
  }

  register(userCrediential: any): Observable<any> {
    return this.http.post(`/auth/signup`, userCrediential);
  }

  buildSignupForm(): void {
    this.signupForm = this.fb.group({
      email: '',
      username: '',
      password: ''
    })
  }

  openLoginModal(evt) {
    this.openLoginModal$.next();
  }
}
