import './news.css'

interface NewsProps{
  imageUrl: string;
  title: string;
  text: string;
}

export function News({ imageUrl, title, text }: NewsProps){
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{text}</p>
      <button>Ver Mais</button>
    </div>
  );
}
