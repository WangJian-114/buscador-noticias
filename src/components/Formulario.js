import React from 'react';
import style from './Formulario.module.css';
import PropTypes from 'prop-types';
import useSelect from '../hooks/useSelect';


const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Negocios' },
        { value: 'entertainment', label: 'Entretenimiento' },
        { value: 'health', label: 'Salud' },
        { value: 'science', label: 'Ciencia' },
        { value: 'sports', label: 'Deportes' },
        { value: 'technology', label: 'Tecnologia' }

    ]


    // utilizar custom hook
    const [ categoria, SelectNoticias ] =  useSelect('general', OPCIONES);
    // 955a25a2154d4f70b7c88a40667ee0a8

    // submit al formulario pasar categoria a app.js
    const buscarNoticias = e => {
        e.preventDefault();
        guardarCategoria(categoria);
    }

    return (
        <div className={`${style.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={style.heading}>Encuentra Noticias por Categoria</h2>
                    <SelectNoticias />

                    <div className="input-fiel col s12">
                        <input 
                            type="submit"
                            className={`${style.btn_block} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}
 
export default Formulario;