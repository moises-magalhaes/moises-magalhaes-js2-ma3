import { getUsername } from "../../utils/storage.js";

export default function createMenu() {
  const navbar = document.querySelector(".menu-container");

  const { pathname } = document.location;
  const username = getUsername();

  let authLink = `<li class="nav-item login"> <a href="login.html" class="${
    pathname === "/login.html" ? "active" : ""
  }">Login</a></li>`;

  if (username) {
    authLink = `<span class="nav-item login">Hi ${username}</span>`;
  }

  //console.log(username);
  console.log(pathname);

  navbar.innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">

								<a class="navbar-brand" href="/">Best Products SA</a>

								

  								
								  <ul class="navbar-nav mr-auto">
										<li class="nav-item active">
											<a href="index.html" class= "nav-link ${
                        pathname === "/" || "/index.html" ? "active" : ""
                      }">Home</a>
                    </li>

											${authLink}
								  </ul>
								
                            </nav>`;
}
