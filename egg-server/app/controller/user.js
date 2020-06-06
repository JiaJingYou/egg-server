const Controller  = require('egg').Controller;

/**
* @Controller 用户管理
*/
class UserController extends Controller {
    constructor(ctx) {
        super(ctx)
    }


    /**
    * @summary 创建用户
    * @description 创建用户，记录用户账户/密码/类型
    * @router post /api/user
    * @request body createUserRequest *body
    * @response 200 baseResponse 创建成功
    */
    async create() {
        const { ctx, service } = this
        ctx.validate(ctx.rule.createUserRequest)
        const payload = ctx.request.body || {}
        // 调⽤ Service 进⾏业务处理
        const res = await service.user.create(payload)
        // 设置响应内容和响应状态码
        ctx.helper.success({ctx, res})
    }
}
module.exports = UserController