type auth = "in" | "out";

export class AuthService {
  isLoggedIn = false;

  isAuthenticated(): Promise<boolean> {
    const val: Promise<boolean> = new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 300);
    });

    return val;
  }

  logging(what: auth): void {
    if (what === "in") {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }
}
