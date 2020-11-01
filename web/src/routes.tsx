import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import CreateOrphanage from './pages/CreateOrphanage';
import Orphanage from './pages/Orphanage';
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import SuccessRegistration from './pages/SuccessRegistration';



function Routes (){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/app" component={OrphanagesMap}/>
                <Route path="/orphanages/create" component={CreateOrphanage}/>
                <Route path="/orphanages/:id" component={Orphanage}/>
                <Route path="/registration/completed" component={SuccessRegistration}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;