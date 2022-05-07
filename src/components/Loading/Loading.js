import { Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './loading.css';

function Loading() {
    return (
        <div className='spinner-container' >
            <Spinner className="spinner-uno" />
            <Spinner className="spinner-dos" />
            <Spinner className="spinner-tres" />
        </div>
    );
}
export default Loading;

/*
Gaby: dejo el link para que nos acordemos por si lo queremos customizar:
https://react-bootstrap.netlify.app/components/spinners/#spinners

*/