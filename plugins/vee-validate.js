import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
extend('required', {
  ...required,
  message: '{_field_} is required',
});
extend('requiredSelect', {
  ...required,
  message: '{_field_} is required',
});
extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length}',
});
