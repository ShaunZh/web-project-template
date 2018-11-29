/**
 * @Author: Hexon
 * @Date: 2018/11/10 上午11:07
 * @Last Modified by: Hexon
 * @Last Modified time: 2018/11/10 上午11:07
 * @description:
 */
const router = require('koa-router')();
const Mock = require('mockjs');
router.post('/login', async ctx => {
  const loginData = Mock.mock({
    code: 200,
    result: {
      username: '@csentence(3, 5)',
      'rolename|1': ['管理员', '录入员', '操作员'],
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJrZXlcIjpcIjIyRTNEMzRBNUFBYTQ0RUFiNjg1MDQxNmMwM0JhODcwXCIsXCJjb250ZW50XCI6XCIxXCIsXCJhdXRvZ3JhcGhcIjpcIi9hdXRoL2xvZ2luXCIsXCJwcmluY2lwYWxcIjpcImFkbWluXCIsXCJ2ZXJzaW9uXCI6MX0iLCJpYXQiOjE1NDA0MzIwMjcsImV4cCI6MTU0MDQ1MzYyN30.EjK-Yz6PKJbjBTRIqtFVBOqemJpDsHVD5SxmNaGbPK8',
      authIdList: [
        'mer_add',
        'mer_edit',
        'mer_disable',
        'mer_enable',
        'mer_man_shop',
        'mer_man_emp',
        'mer_man_coupon',
        'mer_add_save',
        'mer_edit_save',

        'mer_shop_add',
        'mer_shop_edit',
        'mer_shop_disable',
        'mer_shop_enable',
        'mer_shop_edit_save',
        'mer_shop_add_save',

        'mer_emp_add',
        'mer_emp_edit',
        'mer_emp_disable',
        'mer_emp_enable',
        'mer_emp_edit_save',
        'mer_emp_add_save',

        'mer_coup_add',
        'mer_coup_edit',
        'mer_coup_ver',
        'mer_coup_ver_detail',
        'mer_coup_edit_save',
        'mer_coup_add_save',
        'mer_coup_enable',
        'mer_coup_down',

        'mer_coup_ver_more_sel',
        'mer_coup_ver_ver',

        'plat_not_add',
        'plat_not_edit',
        'plat_not_down',
        'plat_not_up',
        'plat_not_add_save',
        'plat_not_edit_save',

        'plat_act_add',
        'plat_act_edit',
        'plat_act_down',
        'plat_act_up',
        'plat_act_pub',
        'plat_act_per',
        'plat_act_add_save',
        'plat_act_edit_save',

        'plat_soft_add',
        'plat_soft_edit',
        'plat_soft_down',
        'plat_soft_up',
        'plat_soft_top',
        'plat_soft_cancel_top',
        'plat_soft_add_save',
        'plat_soft_edit_save',

        'plat_point_man',
        'plat_point_edit',
        'plat_point_edit_save',

        'plat_vip_enable',
        'plat_vip_disable',
        'plat_vip_point_detail',
        'plat_vip_coupon_detail',

        'plat_adv_banner_add',
        'plat_adv_banner_edit',
        'plat_adv_banner_down',
        'plat_adv_banner_up',
        'plat_adv_banner_add_save',
        'plat_adv_banner_edit_save',

        'plat_adv_like_add',
        'plat_adv_like_edit',
        'plat_adv_like_down',
        'plat_adv_like_up',
        'plat_adv_like_add_save',
        'plat_adv_like_edit_save',

        'plat_adv_play_add',
        'plat_adv_play_edit',
        'plat_adv_play_down',
        'plat_adv_play_up',
        'plat_adv_play_add_save',
        'plat_adv_play_edit_save'
      ],
      prdIdList01: ['plat_tab', 'mer_tab', 'visa_tab', 'stat_tab', 'sys_tab'],
      prdIdList02: [
        'mer_manage',
        'mer_coupon',
        'plat_notice',
        'plat_activity',
        'plat_soft_text',
        'plat_advert',
        'plat_point',
        'plat_order',
        'plat_vip]'
      ]
    }
  });
  ctx.body = loginData;
});

module.exports = router;
