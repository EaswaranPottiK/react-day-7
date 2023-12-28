import React from 'react'

const Header = () => {
  return (
    <div>
        <header
  style={{
    height: "9vh",
    width: "100%",
    backgroundColor: "#111827",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 8% 0 8%",
    fontSize: "larger"
  }}
>
  <div style={{ display: "flex", gap: 10 }}>
    <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
    <h1>GeekFoods</h1>
  </div>
  <div
    className="headerLinks"
    style={{ display: "flex", gap: "10%", marginRight: 170 }}
  >
    <p style={{ color: "#3B82F6" }}>Home</p>
    <p>Quote</p>
    <p>Resturants</p>
    <p>Foods</p>
    <p>Contact</p>
  </div>
  <div>
    <button
      style={{
        backgroundColor: "#2563EB",
        color: "white",
        width: 100,
        height: "5vh",
        borderRadius: 8,
        border: "none"
      }}
    >
      Get started
    </button>
  </div>
</header>

    </div>
  )
}

export default Header