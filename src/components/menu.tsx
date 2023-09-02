import './menu.css'

export function Menu(){
  return (
    <div className="menu-container">
      <div className="logo">Logo</div>
      <ul className="menu-options">
        <li className="menu-option"><a href="#">Política</a></li>
        <li className="menu-option"><a href="#">Economia</a></li>
        <li className="menu-option"><a href="#">Esportes</a></li>
        <li className="menu-option"><a href="#">Entretenimento</a></li>
      </ul>
    </div>
  );
}
