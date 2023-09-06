import React from 'react';
import {SplitClient, SplitTreatments } from '@splitsoftware/splitio-react';
import { feature_flag_1 } from './sdkConfig';

function Loading() {
    return <div>Cargando SDK...</div>
}
//En esta parte se recibe el valor del treatment y que nos podrá indicar, dependiendo de su valor, que botón deberá mostrarse
function Button(treatment){

    console.log(treatment)
    if (treatment === 'botonVentas') {
        return (<button> VENTAS </button>);
    } 
    if (treatment === 'botonMarketing') {
        return (<button> MARKETING </button>);
    }
    if (treatment === 'botonAdministracion') {
        return (<button> ADMINISTRACIÓN </button>);
    }else {
        return (<button> USUARIO </button>);
    }
};

export default function Component(obj){
    return (
        //Dentro del componente "SplitClient", debe colocarse el rol configurado en Split, por ejemplo, se configuro un Segmento llamado 'ADMINISTRACION', 
        //el cual cuenta con un Usuario llamado 'usuarioAdministracion', 
        //splitKey debe tener el valor 'usuarioAdministracion' si se desea mostrar el 'treatment' para ese rol.
        <SplitClient splitKey={obj.obj} updateOnSdkTimedout={true}>
            {
                //Dentro del componente SpliTreatmets debe colocarse el nombre de la feature flag a evaluar
            }
            <SplitTreatments names={[feature_flag_1]} >
                {({ treatments, isReady }) => {
                return isReady ? (
                    <div>
                        <h4>{`Feature flag: ${feature_flag_1}`}</h4>
                        <p>{`Rol: ${obj.obj}`}</p>
                        {Button(treatments[feature_flag_1].treatment)}
                        <p>{`Treatment valor: ${treatments[feature_flag_1].treatment}`}</p>
                    </div>
                ) : <Loading />
                }}
            </SplitTreatments>
        </SplitClient>
                
    )
} 