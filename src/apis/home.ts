import { get, post, HttpResponse } from './index';
import titleImg from '../assets/icon/logo_svg.svg';

const imgUrl =
  'https://p0.meituan.net/smarttestvenus/5451f997aa9c1dee543572b083a8bcbe624884.png';

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
  ).then(({ data, status }) => {
    if (status?.code !== 0) return Promise.reject();
    const resultData = data.map((item) => {
      return {
        key: String(item.id),
        title: item.moduleDisplayTitle,
      };
    });
    return resultData;
  });
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
      const imgObj = item.serviceUnitClientDto?.headInfo?.[0] || {};
      return {
        id: item.serviceUnitClientDto?.id,
        moduleId: `${item.moduleId}`,
        title: item.title,
        desc: item.remark,
        videoId: imgObj?.videoId,
        isVideo: imgObj?.type === 1,
        coverImg: imgObj?.url || imgObj?.videoPicture || imgUrl,
        titleImg: item.imageUrl || titleImg,
        tags: item.label?.slice(0, 3) || [],
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
  headInfo: Array<{
    url: string;
    videoId: string;
    videoPicture: string;
  }>;
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
      return {
        id: item.id,
        title: item.title,
        index: index + 1,
        likeCount: item.usefulCount,
        titleImg: item?.headInfo?.[0]?.url || titleImg,
        tags: item.label?.slice(0, 2),
      };
    });
    return result;
  });
};
