import { Html } from "@elysiajs/html";
import { AuthLayout } from "./AuthLayout";
import { GoogleButton } from "./GoogleButton";

type RegisterValues = {
  email?: string;
  name?: string;
  phone?: string;
  country?: string;
};

const COUNTRIES = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda",
  "Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain",
  "Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia",
  "Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso",
  "Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic",
  "Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica","Croatia","Cuba",
  "Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic",
  "DR Congo","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia",
  "Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia",
  "Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana",
  "Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland",
  "Israel","Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya",
  "Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho",
  "Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi",
  "Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius",
  "Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco",
  "Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand",
  "Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman",
  "Pakistan","Palestine","Palau","Panama","Papua New Guinea","Paraguay","Peru",
  "Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda",
  "Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa",
  "San Marino","São Tomé and Príncipe","Saudi Arabia","Senegal","Serbia",
  "Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands",
  "Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan",
  "Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania",
  "Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey",
  "Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom",
  "United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela",
  "Vietnam","Yemen","Zambia","Zimbabwe",
];

export const RegisterPage = ({
  error,
  values,
}: {
  error?: string;
  values?: RegisterValues;
} = {}) => (
  <AuthLayout title="Register">
    <div class="auth-header">
      <div class="auth-tag">
        <span class="auth-tag-slash">///</span>
        <span>Operator Enrollment</span>
      </div>
      <h1 class="auth-title">Register</h1>
      <p class="auth-subtitle">Create Operator Profile</p>
    </div>

    <form method="POST" action="/auth/register">
      <div class="form-field">
        <label class="form-label">Full Name</label>
        <input
          type="text"
          name="name"
          value={values?.name ?? ""}
          autofocus
        />
      </div>

      <div class="form-field">
        <label class="form-label">Email Address</label>
        <input
          type="email"
          name="email"
          required
          value={values?.email ?? ""}
        />
      </div>

      <div class="form-row">
        <div class="form-field">
          <label class="form-label">Phone</label>
          <input
            type="tel"
            name="phone"
            value={values?.phone ?? ""}
            placeholder="+1 555 0123"
          />
        </div>
        <div class="form-field">
          <label class="form-label">Country</label>
          <select name="country" class="form-select" required>
            <option value="" disabled selected={!values?.country}>
              Select country
            </option>
            {COUNTRIES.map((c) => (
              <option value={c} selected={values?.country === c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div class="form-field">
        <label class="form-label">Password</label>
        <input type="password" name="password" required minlength="8" />
        <p class="form-hint">Minimum 8 characters</p>
      </div>

      <label class="form-check">
        <input type="checkbox" name="remember" value="on" checked />
        Stay signed in
      </label>

      {error && <div class="auth-error">{error}</div>}

      <button type="submit" class="auth-btn">Create Profile</button>
    </form>

    <div class="auth-divider">
      <div class="auth-divider-line"></div>
      <span class="auth-divider-text">or</span>
      <div class="auth-divider-line"></div>
    </div>

    <GoogleButton label="Sign up with Google" />

    <p class="auth-switch">
      Have an account?{" "}
      <a href="/auth/login">Sign In</a>
    </p>
  </AuthLayout>
);
