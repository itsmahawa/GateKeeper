<div className="container">
  <h1>Login</h1>
  <form onSubmit={onSubmit}>
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        value={username}
        onChange={e => {
          setUsername(e.target.value);
        }}
      />
    </div>
    <div className="form-group">
      <input
        type="password"
        className="form-control"
        placeholder="Password"
        value={password}
        onChange={e => {
          setPassword(e.target.value);
        }}
      />
    </div>
    <button className="btn btn-primary btn-block">Login</button>
    <Link className="btn btn-success btn-block" to="/Register">
      Register
    </Link>
  </form>
</div>;
