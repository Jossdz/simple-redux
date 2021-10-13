
// https://live.staticflickr.com/65535/50617970222_a69ef44d4e_c.jpg
const $counter = document.querySelector("#counter")
const $incrementBtn = document.querySelector("#increment")
const $decrementBtn = document.querySelector("#decrement")

const { createStore } = Redux

const initialState = { count: 0 }

// Actions / Intenciones de cambio
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

// Un reducer se encarga de gestionar los cambios al state, a partir de una intencion de cambio que llega a partir del metodo dispatch con un action. (Una intencion de cambio con una accion especifica).
const reducer = (state = initialState, action) => {
  switch(action.type){
 		case INCREMENT:
      	return ({
        		count: state.count + 1
      	})
		case DECREMENT:
      	return ({
        		count: state.count - 1
      	})
      default:
      	// Es importante devolver el estado como caso por defecto
      	return state
  }
}

// Creamos el almacenamiento de la aplicacion a partir de createStore que requiere un reducer
const store = createStore(reducer)
// El store NO es el estado de la aplicacion, es  un objeto con propiedades y metodos para manipular la informacion o suscribir eventos a los cambios de la misma

//subscribe se ejecuta cuando se despacha una accion
store.subscribe(() => {
	console.log("Se recibio una accion:", store.getState());
	$counter.innerText = store.getState().count;
})

// Un action define la intencion de cambiar el estado de la aplicacion:
const incrementOne = () => ({ // Esto es un action creator.
	type: INCREMENT
})
const decrementOne = () => ({ // Esto es un action creator.
	type: DECREMENT
})
const unkownAction = () => ({ // Esto es un action creator.
	type: "as"
})

// Dispatch comunica al reducer de la intencion de cambio.
//store.dispatch(incrementOne())
//store.dispatch(incrementOne())
//store.dispatch(decrementOne())
//store.dispatch(unkownAction())

$incrementBtn.onclick = () => {
	store.dispatch(incrementOne())
}

$decrementBtn.onclick = () => {
	store.dispatch(decrementOne())
}

//const counter_2 = {
//	count: 1
//}

//counter_2.count += 1
//counter_2.count += 1
//counter_2.count -= 1
