import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Home from '../components/home'
import DadosTreino from '../components/dadosTreino'
import DadosTreinoAluno from '../components/dadosTreinoAluno'

function Routes() {
    return(
        <Switch>
            <Route exact path='/inicio' component={Home} />
            
            <Route path='/dadosTreino' component={DadosTreino} />

            <Route path='/dadosTreinoAluno' component={DadosTreinoAluno} />
            
            <Redirect from='*' to='/' />
        </Switch>
    )
}
export default Routes;

