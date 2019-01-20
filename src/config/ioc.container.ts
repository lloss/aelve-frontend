import { Container } from "inversify";
import getDecorators from "inversify-inject-decorators";
import "reflect-metadata";
import {
    SERVICE_IDENTIFIER
} from '../constants/identifiers'
import {
    HaskellRepoSearhFormStore,
    MainPageDomainStore,
    MainPageMockDomainStore,
    UiStore
} from '../entities/stores'

import {IHaskellRepoSearchFormStore, IMainPageDomainStore, IUiStore} from '../interfaces'

const container = new Container();


container.bind<IUiStore>(SERVICE_IDENTIFIER.UI_STORE).to(UiStore);
container.bind<IHaskellRepoSearchFormStore>(SERVICE_IDENTIFIER.HASKELL_FORM_STORE).to(HaskellRepoSearhFormStore);
container.bind<IMainPageDomainStore>(SERVICE_IDENTIFIER.MAIN_PAGE_DOMAIN_STORE).to(MainPageDomainStore);
if (process.env.NODE_ENV === "TEST") {
    container.bind<IMainPageDomainStore>(SERVICE_IDENTIFIER.MAIN_PAGE_DOMAIN_STORE).to(MainPageMockDomainStore);
}




const { lazyInject } = getDecorators(container, true);


export { container, lazyInject };