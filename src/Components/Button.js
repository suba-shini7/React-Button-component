import "../App.css";
import "../Components/Button.css";
import { Discription } from "./Discription";
export const Button = (props) => {
  return (
    <div>
      <div className="dflt">
        <div>
          <Discription dis="<Button />" />
          <button className="empty">{props.name}</button>
        </div>
        <div >
          <Discription dis="&:hover, &:focus" />
          <button className="empty hover-empty">{props.name}</button>
        </div>
      </div>
<div className="dflt">
      <div>
        <Discription dis="<Button variant=”outline” />" />
        <button className="variant">{props.name}</button>
      </div>
      <div>
        
        <Discription dis="&:hover, &:focus" />
        <button className="variant hover-variant">{props.name}</button>

      </div>

</div>
      <div className="dflt">
      <div >
        <Discription dis="<Button variant=”outline” />" />
        <button className="txt">{props.name}</button>

      </div>
      <div >
      <Discription dis="&:hover, &:focus" />

        <button className="txt hover-txt">{props.name}</button>
      </div>
      </div>

      <div className="dflt">
      <div >
        <Discription dis="<Button variant=”outline” />" />
        <button className="shadow">{props.name}</button>

      </div>
     
      </div>

      
<div className="dflt">
<div >
        <Discription dis="<Button variant=”outline” />" />
        <button className="disable ">{props.name}</button>

      </div>
      <div>
      <Discription dis="&:hover, &:focus" />

        <button className="disable hover-disable">{props.name}</button>
      </div>
</div>
      <div className="dflt">
      <div >
        <Discription dis="<Button startIcon=”local_grocery_store” />" />
        <button className="icontxt">
          <i class="bi bi-cart-plus"></i>
          {props.name}
        </button>
      </div>
      <div >
      <Discription dis="<Button endIcon=”local_grocery_store” />" />
        
        <button className="icontxt">
          {props.name} <i class="bi bi-cart-plus"></i>
        </button>
      </div>
      </div>

      
<div className="dflt">
<div >
        <Discription dis="<Button size=”sm” />" />
        <button className="sm">{props.name}</button>

      </div>
      <div >
      <Discription dis="<Button size=”md” />" />

        <button className="md">{props.name}</button>
      </div>
      <div>
      <Discription dis="<Button size=”lg” />" />
      <button className="lg">{props.name}</button>

      </div>

</div>
      <div className="dflt">
      <div >
        <Discription dis="<Button size=”default” />" />
        <button className="default">{props.name}</button>

      </div>
      <div >
      <Discription dis="<Button size=”primary” />" />

        <button className="primary">{props.name}</button>
      </div>
      <div>
      <Discription dis="<Button size=”secondary” />" />
      <button className="secondary">Secondary</button>


      </div>
      <div>
      <Discription dis="<Button size=”danger” />" />
      <button className="danger">Danger</button>

      </div>

      </div>

    

      <div className="dflt">
        <div>
        <Discription dis="&:hover, &:focus" />
        <button className="default hover-default">{props.name}</button>
        <button className="primary hover-primary">{props.name}</button>
        <button className="secondary hover-secondary">Secondary</button>
        <button className="danger hover-danger">Danger</button>
        </div>
       
     
      </div>
     
    </div>
  );
};
