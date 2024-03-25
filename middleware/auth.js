// middleware/auth.js
export default function ({ store, redirect }) {
  // Check if the user is authenticated
  if (!store.state.authenticated) {
    return redirect('/login'); // Redirect to login page if not authenticated
  }
}
