import { get, post, HttpResponse } from './index';

/**
 * 获取模块
 */
interface ModuleParams {
  appType: string;
}

interface ModuleItem {
  appType: string;
  code: string;
  id: string;
  name: string;
  status: number;
  tenant: string;
  weight: string;
}

export const getModule = () => {
  const params = {
    appType: 'cooperation_recruitment',
  };
  return post<ModuleParams, HttpResponse<ModuleItem[]>>(
    '/sapi/client/v1/tmcmodulemenuclientservice_newhomemenus',
    params,
  ).then((data) => {
    return data;
  });
};

/**
 * 获取模块下的菜单列表
 */

interface ModuleMenusParams {
  moduleMenuCode: string;
  type: number;
}

interface ModuleMenusItem {
  id: string;
  moduleCode: string;
  moduleDisplayTitle: string;
}

export const getModuleMenus = () => {
  const params = {
    moduleMenuCode: 'menu_strategy',
    type: 1,
  };
  return post<ModuleMenusParams, HttpResponse<ModuleMenusItem[]>>(
    '/sapi/client/v1/tmcmoduleconfigclientservice_homepagemodules',
    params,
  ).then(({ data }) => {
    console.log(data);
  });
};

/**
 * 获取模块菜单下的服务列表
 */

interface MenuServiceParams {
  moduleId: number;
  pageNo: number;
  pageSize: number;
}

interface MenuServiceItem {
  id: number;
  title: string;
  imageUrl: string;
  moduleCode: string;
  moduleId: number;
  remark: string;
}

interface MenuServiceList extends HttpResponse {
  data: MenuServiceItem[];
  page: {
    pageNo: number;
    pageSize: number;
    totalCount: number;
    totalPageCount: number;
  };
}

export const getMenuServiceList = (id: number) => {
  const params = {
    moduleId: id,
    pageNo: 1,
    pageSize: 200,
  };
  return get<MenuServiceParams, HttpResponse<MenuServiceList>>(
    '/sapi/client/v1/tmcmoduleconfigclientservice_modulecontent',
    params,
  ).then(({ data }) => {
    console.log(data);
  });
};
