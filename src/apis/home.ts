import { get, post, HttpResponse } from './index';
import titleImg from '../assets/icon/logo_svg.svg';
import { thousandthNumber } from '../utils/index';

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

export const getModuleMenus = (id?: string) => {
  const params = {
    moduleMenuCode: id || 'menu_strategy',
    type: 1,
  };
  return post<ModuleMenusParams, HttpResponse<ModuleMenusItem[]>>(
    '/sapi/client/v1/tmcmoduleconfigclientservice_homepagemodules',
    params,
  ).then(({ data, status }) => {
    if (status?.code !== 0) return Promise.reject();
    return {
      key: String(data[0]?.id || ''),
      title: data[0]?.moduleDisplayTitle,
    };
  });
};
// 新获取菜单接口

interface HomeMenusParams {
  appType: string;
}

interface HomeMenuItem {
  id: string;
  tenant: string;
  name: string;
  code: string;
  weight: number;
  status: number;
  deleted: number;
  appType: string;
}

export const getHomeMenus = () => {
  const params = {
    appType: 'cooperation_recruitment',
  };
  return post<HomeMenusParams, HttpResponse<HomeMenuItem[]>>(
    '/sapi/client/v1/menuclientservice_gethomemenus',
    params,
  ).then(({ data, status }) => {
    if (status?.code !== 0) return Promise.reject();
    const resultData = data.map((item) => {
      return {
        code: item.code,
      };
    });
    return resultData;
  });
};

interface MenusItem {
  key: string;
  title: string;
}

// 根据模块获取菜单列表
export const getMenusByModule = async () => {
  let result: MenusItem[] = [];
  const rquestArr: Array<Promise<MenusItem>> = [];
  const modules = await getHomeMenus();
  while (modules?.length > 0) {
    rquestArr.push(getModuleMenus(modules.pop()?.code));
  }

  result = await Promise.all(rquestArr.reverse());
  return result;
};

/**
 * 获取模块菜单下的服务列表
 */

interface MenuServiceParams {
  moduleId: string;
  pageNo: number;
  pageSize: number;
}

interface MenuServiceItem {
  id: number;
  title: string;
  imageUrl: string;
  secImageUrl: string;
  moduleCode: string;
  serviceUnitClientDto: {
    id: number;
    label: string[];
    description: string;
    title: string;
    headInfo: Array<{
      type: number;
      url: string;
      videoId: string;
      videoPicture: string;
    }>;
  };
  moduleId: string;
  label: string[];
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

export const getMenuServiceList = (id: string) => {
  const params = {
    moduleId: id,
    pageNo: 1,
    pageSize: 200,
  };

  return get<MenuServiceParams, MenuServiceList>(
    '/sapi/client/v1/tmcmoduleconfigclientservice_modulecontent',
    params,
  ).then(({ data, status }) => {
    if (status?.code !== 0) return Promise.reject();
    const resultData = data.map((item) => {
      const serviceUnitClientDto = item?.serviceUnitClientDto || {};
      const imgObj = serviceUnitClientDto?.headInfo?.[0] || {};
      return {
        id: serviceUnitClientDto?.id || item.id,
        moduleId: `${item.moduleId}`,
        title: serviceUnitClientDto.title,
        desc: serviceUnitClientDto.description,
        videoId: imgObj?.videoId,
        isVideo: imgObj?.type === 1,
        coverImg: imgObj?.url || imgObj?.videoPicture,
        titleImg: item.imageUrl,
        tags: serviceUnitClientDto.label?.slice(0, 3) || [],
      };
    });
    return resultData;
  });
};

/**
 * 获取最新上线服务列表
 */

interface LastServiceParams {
  pageNo: number;
  pageSize: number;
}

interface LastServiceItem {
  id: string;
  title: string;
  imageUrl: string;
  secImageUrl: string;
  serviceUnitClientDto: {
    label: string[];
    usefulCount: number;
    id: string;
    title: string;
    headInfo: Array<{
      url: string;
      videoId: string;
      videoPicture: string;
    }>;
  };
  moduleCode: string;
  moduleId: number;
  label: string[];
  remark: string;
  usefulCount: number;
}

interface LastServiceList extends HttpResponse {
  data: LastServiceItem[];
  page: {
    pageNo: number;
    pageSize: number;
    totalCount: number;
    totalPageCount: number;
  };
}

export const getLastServiceList = () => {
  const params = {
    pageNo: 1,
    pageSize: 6,
  };
  return get<LastServiceParams, LastServiceList>(
    '/sapi/client/v1/getoldestcontent',
    params,
  ).then(({ data, status }) => {
    if (status?.code !== 0) return Promise.reject();
    const result = data?.map((item, index) => {
      const serviceUnitClientDto = item?.serviceUnitClientDto || {};
      return {
        id: serviceUnitClientDto.id,
        title: serviceUnitClientDto.title,
        index: index + 1,
        likeCount: thousandthNumber(serviceUnitClientDto.usefulCount),
        titleImg: item?.imageUrl || titleImg,
        tags: serviceUnitClientDto.label?.slice(0, 2),
      };
    });
    return result;
  });
};
