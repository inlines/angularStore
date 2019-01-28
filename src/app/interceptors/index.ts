import { EmployeeListInterceptor } from "./employee-list.interceptor";
import { DepartmentsListInterceptor } from "./departments-list.interceptor";
import { HTTP_INTERCEPTORS } from "@angular/common/http";


const interceptors = [];

[
  EmployeeListInterceptor,
  DepartmentsListInterceptor
]
.forEach(inteceptor => {
  interceptors.push({
    provide: HTTP_INTERCEPTORS,
    useClass: interceptors,
    multi: true
  });
});

export { interceptors };