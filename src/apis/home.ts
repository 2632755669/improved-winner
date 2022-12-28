import { get, post, HttpResponse } from './index';
import { homeTabs, homeNavList } from '../mockData';
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
  const result = homeTabs.map((item) => {
    return {
      key: String(item.id),
      title: item.moduleDisplayTitle,
    };
  });
  return post<ModuleMenusParams, HttpResponse<ModuleMenusItem[]>>(
    '/sapi/client/v1/tmcmoduleconfigclientservice_homepagemodules',
    params,
  ).then(
    ({ data }) => {
      console.log(data);
      const resultData = homeTabs.map((item) => {
        return {
          key: String(item.id),
          title: item.moduleDisplayTitle,
        };
      });
      return resultData;
    },
    () => {
      return result;
    },
  );
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
  id: string;
  title: string;
  imageUrl: string;
  secImageUrl: string;
  moduleCode: string;
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

  const result = homeNavList.map((item) => {
    return {
      id: item.id,
      moduleId: `${item.moduleId}`,
      title: item.title,
      desc: item.remark,
      coverImg: item.imageUrl || imgUrl,
      titleImg: item.secImageUrl || titleImg,
      tags:
        ['自动获取测试测试', '支持定制测试测试', '多主题测试测试'] ||
        item.label?.slice(3),
    };
  });

  return get<MenuServiceParams, MenuServiceList>(
    '/sapi/client/v1/tmcmoduleconfigclientservice_modulecontent',
    params,
  ).then(
    ({ data }) => {
      console.log(data);
      const resultData = data.map((item) => {
        return {
          id: item.id,
          moduleId: `${item.moduleId}`,
          title: item.title,
          desc: item.remark,
          coverImg: item.imageUrl || imgUrl,
          titleImg: item.secImageUrl || titleImg,
          tags: item.label?.slice(3) || [],
        };
      });
      return resultData;
    },
    () => result,
  );
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

  let result = homeNavList.map((item, index) => {
    return {
      id: String(item.id),
      title: item.title,
      index: index + 1,
      likeCount: item.weight,
      titleImg: item.secImageUrl || imgUrl,
      tags: ['自动获取', '支持定制', '多主题'] || item.label,
    };
  });

  return get<LastServiceParams, LastServiceList>(
    '/sapi/client/v1/getoldestcontent',
    params,
  ).then(
    ({ data }) => {
      console.log(data);
      result = data?.map((item, index) => {
        return {
          id: item.id,
          title: item.title,
          index: index + 1,
          likeCount: item.usefulCount,
          titleImg: item?.headInfo?.[0]?.url || titleImg,
          tags: item.label?.slice(2) || [
            '自动获取测试测试',
            '支持定制测试测试',
          ],
        };
      });
      return result;
    },
    () => result,
  );
};
