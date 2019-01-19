import { Container } from "inversify";
import getDecorators from "inversify-inject-decorators";
import "reflect-metadata";
import {
    SERVICE_IDENTIFIER
} from '../constants/identifiers'
import {
    HaskellRepoSearhFormStore,
    UiStore
} from '../entities/stores'

import {IHaskellRepoSearchFormStore, IUiStore} from '../interfaces'

const container = new Container();

container.bind<IUiStore>(SERVICE_IDENTIFIER.UI_STORE).to(UiStore);
container.bind<IHaskellRepoSearchFormStore>(SERVICE_IDENTIFIER.HASKELL_FORM_STORE).to(HaskellRepoSearhFormStore);

const { lazyInject } = getDecorators(container, true);


export { container, lazyInject };