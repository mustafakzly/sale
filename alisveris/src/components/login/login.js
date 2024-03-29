import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../styles/login/login.css";
import Loginlog from "../../assets/logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://192.168.202.128:1337/api/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (data.jwt) {
        localStorage.setItem("jwt", data.jwt);
        alert("Giriş başarılı!");
        navigate("/");
      } else {
        alert("Giriş başarısız. Lütfen bilgilerinizi kontrol edin.");
      }
    } catch (error) {
      console.error("Giriş işlemi sırasında bir hata oluştu", error);
      alert("Giriş işlemi sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
    }
  };

  return (
    <div className="login">
      <NavLink to="/">
        <img src={Loginlog} alt="Login Logo" />
      </NavLink>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Giriş Yap</h1>
        <div className="log">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div className="re">
          <div className="remember">
            <input type="checkbox" />
            <span>Beni Hatırla</span>
          </div>
          <div className="reset">
            <NavLink to="/reset-password">Şifremi Unuttum</NavLink>
          </div>
        </div>

        <div className="login-btn">
          <button type="submit">Giriş Yap</button>
        </div>
        <div className="signup">
          <h2>Henüz Üye Değil Misiniz?</h2>
          <NavLink to="/signup">
            <button>Hemen Üye Ol</button>
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default Login;
