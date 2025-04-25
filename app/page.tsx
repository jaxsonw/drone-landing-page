import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 relative overflow-hidden"
        style={{
          backgroundImage: 'url("/web-08.png")',
          backgroundSize: 'cover',
          backgroundPosition: '75% center',
          position: 'relative',
          minHeight: '85vh'
        }}>
        {/* 放射状背景已移除 */}

        <div className="max-w-6xl mx-0 ml-4 md:ml-8 relative z-10">
          {/* Logo */}
          <div className="absolute top-0 left-0">
            <div className="w-16 h-16 flex items-center justify-center mb-6">
              <Image
                src="/web-17.png"
                alt="Logo"
                width={64}
                height={64}
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="flex pt-32 md:pt-40">
            <div className="md:w-1/2 mb-8 md:mb-0 pl-0 pr-8 md:pl-0 md:pr-16 max-w-md">
              <div className="mb-16">
                <div className="mb-5">
                  <h1 className="text-2xl md:text-3xl font-medium text-slate-700 leading-tight">
                    <div className="whitespace-nowrap">Intelligent Development Of</div>
                    <div className="whitespace-nowrap">Unmanned Aerial Vehicle System</div>
                  </h1>
                </div>
                <div className="text-4xl md:text-6xl font-bold text-indigo-900 mb-10 leading-tight">
                  <h2 className="whitespace-nowrap">智能开发无人机系统</h2>
                </div>
                <p className="text-slate-600 mb-2 text-xl">革命性算控一体无人机平台</p>
                <p className="text-slate-600 text-xl">解锁无限开发可能</p>
              </div>

              <div className="flex space-x-16 md:space-x-24 mt-20">
                {/* 图标1 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-3">
                    <Image
                      src="/web-14.png"
                      alt="100%软硬件开源"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-sm text-indigo-800">
                    <div className="whitespace-nowrap">100%软硬件开源</div>
                  </div>
                </div>
                {/* 图标2 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-3">
                    <Image
                      src="/web-15.png"
                      alt="原生AI支持"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-sm text-indigo-800">
                    <div className="whitespace-nowrap">原生AI支持</div>
                  </div>
                </div>
                {/* 图标3 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-3">
                    <Image
                      src="/web-16.png"
                      alt="通用型无人机"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-sm text-indigo-800">
                    <div className="whitespace-nowrap">通用型无人机</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Benefits Section */}
      <section className="text-white py-16 px-6" style={{ backgroundColor: '#2f3866' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-white">用户能获得什么</h2>
          <div className="grid md:grid-cols-3 gap-24 my-10 relative">
            {/* 使用绝对定位来确保三个卡片中的第一行文字在同一水平线上 */}
            <div className="text-slate-800 p-6 rounded-2xl h-full min-h-[450px] flex flex-col shadow-md" style={{ background: 'url("/web-18.png") center/cover no-repeat', backgroundSize: '102% 102%' }}>
              <h3 className="font-bold text-xl mb-6 text-center py-4 bg-white bg-opacity-80 -mx-6 -mt-6 rounded-t-2xl text-indigo-800">
                100%软硬件开源，全链路可控
              </h3>
              <div className="h-full">
                <div className="mt-16">
                  <p className="text-base mb-6 text-left text-indigo-800">
                    全自研开源操作系统EOS：原生支持大模型，实时性和安全性，更透明，可信且易于获取。
                  </p>
                  <p className="text-base text-left text-indigo-800">
                    开源生态优势：以开源开放的基础软件，带领芯片、操作系统、传感器，应用开发等全产业链，为开发者和C端用户提供全面生态服务。
                  </p>
                </div>
              </div>
            </div>
            <div className="text-slate-800 p-6 rounded-2xl h-full min-h-[450px] flex flex-col shadow-md" style={{ background: 'url("/web-18.png") center/cover no-repeat', backgroundSize: '102% 102%' }}>
              <h3 className="font-bold text-xl mb-6 text-center py-4 bg-white bg-opacity-80 -mx-6 -mt-6 rounded-t-2xl text-indigo-800">
                原生AI支持
              </h3>
              <div className="h-full">
                <div className="mt-16">
                  <p className="text-base mb-6 text-left text-indigo-800">端侧NPU算力：赋能各类AI场景，支持8K视频编解码和多路图像头输入。</p>
                  <p className="text-base text-left text-indigo-800">MCP协议支持：提升通用性、自主性和智能化程度。</p>
                </div>
              </div>
            </div>
            <div className="text-slate-800 p-6 rounded-2xl h-full min-h-[450px] flex flex-col shadow-md" style={{ background: 'url("/web-18.png") center/cover no-repeat', backgroundSize: '102% 102%' }}>
              <h3 className="font-bold text-xl mb-6 text-center py-4 bg-white bg-opacity-80 -mx-6 -mt-6 rounded-t-2xl text-indigo-800">
                通用型无人机
              </h3>
              <div className="h-full">
                <div className="mt-16">
                  <p className="text-base mb-6 text-left text-indigo-800">任务模块灵活加装：支持加装灵巧手、机械臂、交点固定装置和物流箱等任务模块，重点支持3D打印。</p>
                  <p className="text-base text-left text-indigo-800">应用场景广泛：机械臂与灵巧手/交点固定装置/物流箱/3D打印技术。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users Section */}
      <section className="py-20 px-4 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-indigo-800">目标用户</h2>
          <div className="grid md:grid-cols-3 gap-32 mx-auto" style={{ maxWidth: '90%' }}>
            <div className="text-center">
              <div className="relative rounded-lg overflow-hidden mb-8 shadow-lg">
                <Image
                  src="/web-13.png"
                  alt="穿越机（FPV）C端用户"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white py-3">
                  <h3 className="font-bold text-xl text-indigo-800">穿越机（FPV）C端用户</h3>
                </div>
              </div>
              <ul className="text-base text-indigo-800 space-y-3 list-disc text-left pl-7 pr-3">
                <li>通用无人机平台环境：追求高性价比、高可玩性。</li>
                <li>进阶用户：需要高自由度定制飞控与图传系统。</li>
                <li>发烧友：喜欢动手改装、尝试新玩法的创客或极客。</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="relative rounded-lg overflow-hidden mb-8 shadow-lg">
                <Image
                  src="/web-12.png"
                  alt="教育领域用户"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white py-3">
                  <h3 className="font-bold text-xl text-indigo-800">教育领域用户</h3>
                </div>
              </div>
              <ul className="text-base text-indigo-800 space-y-3 list-disc text-left pl-7 pr-3">
                <li>高校与职业院校：配合无人机课程，利用开源优势。</li>
                <li>中小学STEA教育：适用于科技特长生竞赛项目。</li>
                <li>科研开发者：用于无人机算法开发。</li>
                <li>科研项目：支持具身智能、低空经济与人工智能研究。</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="relative rounded-lg overflow-hidden mb-8 shadow-lg">
                <Image
                  src="/web-11.png"
                  alt="企业用户"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white py-3">
                  <h3 className="font-bold text-xl text-indigo-800">企业用户</h3>
                </div>
              </div>
              <ul className="text-base text-indigo-800 space-y-3 list-disc text-left pl-7 pr-3">
                <li>能源与基础设施：提升算力、光伏、油气管网巡检等效率与安全性。</li>
                <li>农业科技：植保喷洒、土地测绘等，优化生产。</li>
                <li>物流与运输：偏远地区小型货物配送，提高效率。</li>
                <li>安防与应急：边境巡逻、城市监控，提供实时支持。</li>
                <li>科研与教育：高效采集数据与样本。</li>
                <li>影视与媒体：航拍影视，提供独特角度与高清影像。</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features and Pricing - Combined Section */}
      <section className="py-16 px-6" style={{ backgroundColor: '#2f3866' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-white">产品亮点</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-100 p-6 rounded-md shadow">

              <h3 className="font-bold text-xl mb-4 text-indigo-800 pb-2 border-b border-slate-300">真正开源， 全链路可控</h3>
              <ul className="text-sm space-y-3 list-disc pl-5 text-indigo-800">
                <li>软硬件全部开源，自由修改，深度定制。</li>
                <li>EOS开源实时操作系统，低抖动优化，NPU与CPU高效协同。</li>
                <li>全开源PX4飞控系统，兼容ROS2生态，支持飞控模块自定义。</li>
              </ul>
            </div>

            <div className="bg-slate-100 p-6 rounded-md shadow">

              <h3 className="font-bold text-xl mb-4 text-indigo-800 pb-2 border-b border-slate-300">MCP协议支持， 提升大模型技术适配</h3>
              <ul className="text-sm space-y-3 list-disc pl-5 text-indigo-800">
                <li>大模型可下达任务指令，提升自动化与智能化水平。</li>
                <li>协同调度平台与通信设备，实现分布式任务执行。</li>
                <li>访问实时数据源，优化决策过程。</li>
              </ul>
            </div>

            <div className="bg-slate-100 p-6 rounded-md shadow">

              <h3 className="font-bold text-xl mb-4 text-indigo-800 pb-2 border-b border-slate-300">计算与控制一体化架构</h3>
              <ul className="text-sm space-y-3 list-disc pl-5 text-indigo-800">
                <li>通用芯片组方案，计算与飞控深度融合，提升响应速度与能效。</li>
                <li>低门槛开发，10分钟快速部署，支持多语言。</li>
                <li>飞控与主控协同运行，安全可靠，配备6TOPSA处理器与多传感器套件。</li>
              </ul>
            </div>

            <div className="bg-slate-100 p-6 rounded-md shadow">

              <h3 className="font-bold text-xl mb-4 text-indigo-800 pb-2 border-b border-slate-300">模块化开发， 优先支持3D打印零件</h3>
              <ul className="text-sm space-y-3 list-disc pl-5 text-indigo-800">
                <li>快速加装任务模块，实现多种应用。</li>
                <li>丰富硬件接口，支持自研扩展部件。</li>
                <li>3D打印技术，实现硬件开源化与可复制性。</li>
              </ul>
            </div>

            <div className="bg-slate-100 p-6 rounded-md shadow">

              <h3 className="font-bold text-xl mb-4 text-indigo-800 pb-2 border-b border-slate-300">原生化教育为科研打造</h3>
              <ul className="text-sm space-y-3 list-disc pl-5 text-indigo-800">
                <li>软全流程文档，适配各阶段课程需求。</li>
                <li>广泛用于STEM教育、算法教学、机器人竞赛与科研验证。</li>
              </ul>
            </div>

            <div className="bg-slate-100 p-6 rounded-md shadow">

              <h3 className="font-bold text-xl mb-4 text-indigo-800 pb-2 border-b border-slate-300">共享全生态资源，持续演进升级</h3>
              <ul className="text-sm space-y-3 list-disc pl-5 text-indigo-800">
                <li>定期推送系统更新与功能增强，开放贡献机制。</li>
                <li>接入开发者平台，集成社区模型与硬件扩展蓝图，加速创新闭环构建。</li>
              </ul>
            </div>
          </div>

          <div className="border-t  my-20"></div>

          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-white">定价策略</h2>
          <div className="grid md:grid-cols-3 gap-24 mx-auto" style={{ maxWidth: '80%' }}>
            {/* 玩家尝鲜版 */}
            <div className="rounded-md shadow overflow-hidden relative min-h-[480px]" style={{ background: 'url("/web-10.png") center/cover no-repeat', backgroundSize: '100% 100%', width: 'calc(100% + 30px)' }}>
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-12 pt-2">
                  <h3 className="font-bold text-xl text-indigo-800">玩家尝鲜版</h3>
                  <p className="text-xl font-bold text-indigo-800">¥ 700</p>
                </div>
                <ul className="text-sm text-indigo-800 space-y-2 list-disc pl-5 mt-4">
                  <li>超稳悬停，媲美千元无人机</li>
                  <li>激光避障</li>
                  <li>智能跟随</li>
                </ul>
              </div>
            </div>

            {/* 教育版 */}
            <div className="bg-gradient-to-b from-blue-500 to-blue-600 text-white rounded-md shadow overflow-hidden relative min-h-[480px]" style={{ width: 'calc(100% + 30px)' }}>
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-center pb-2 mb-12 border-b border-blue-400 pt-2">
                  <h3 className="font-bold text-xl">教育版</h3>
                  <p className="text-xl font-bold">¥ 3999起</p>
                </div>
                <ul className="text-sm space-y-2 list-disc pl-5">
                  <li>软硬件全部透明，用户可以自由修改，便于学员拆解学习原理及进行二次开发</li>
                  <li>基于学生和学校需求定制套件含标准无人机主体、基础传感器套件、开发工具包，开源和开放所有软硬件接口</li>
                  <li>支持扩展配件，如机械臂模块、智能夹爪等</li>
                </ul>
              </div>
            </div>

            {/* 企业定制版 */}
            <div className="rounded-md shadow overflow-hidden relative min-h-[480px]" style={{ background: 'url("/web-10.png") center/cover no-repeat', backgroundSize: '100% 100%', width: 'calc(100% + 30px)' }}>
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-12 pt-2">
                  <h3 className="font-bold text-xl text-indigo-800">企业定制版</h3>
                  <p className="text-xl font-bold text-indigo-800"></p>
                </div>
                <ul className="text-sm text-indigo-800 space-y-2 list-disc pl-5 mt-4">
                  <li>定制更高负载、更大电量及与能源、农业、安防等行业深度融合的解决方案</li>
                </ul>
                <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4">
                  <button className="py-4 px-8 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-500 transition-colors">获取联系方式</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="mb-16 text-center text-3xl font-bold text-blue-900">长期价值</h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* 持续迭代的技术支持 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4 flex h-36 w-36 items-center justify-center rounded-full border-2 border-dashed border-blue-300 bg-white p-4">
              <div className="absolute inset-1 rounded-full border border-blue-200"></div>
              <p className="text-center text-base font-medium text-blue-900">持续迭代的技术支持</p>
            </div>
            <div className="bg-indigo-800 p-6 text-white h-80 w-56 overflow-y-auto rounded-lg">
              <ul className="space-y-4 text-base">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-300">•</span>
                  <p>定期更新固件与软件，兼容PX4和ROS 2，提升稳定性与扩展性。</p>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-300">•</span>
                  <p>组建开源生态架构，激励开发者参与，保持平台演进动力。</p>
                </li>
              </ul>
            </div>
          </div>

          {/* 标准化解决方案流程 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4 flex h-36 w-36 items-center justify-center rounded-full border-2 border-dashed border-blue-300 bg-white p-4">
              <div className="absolute inset-1 rounded-full border border-blue-200"></div>
              <p className="text-center text-base font-medium text-blue-900">标准化解决方案流程</p>
            </div>
            <div className="bg-indigo-800 p-6 text-white h-80 w-56 overflow-y-auto rounded-lg">
              <ul className="space-y-4 text-base">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-300">•</span>
                  <p>提供工业巡检、物流配送、应急响应等领域的标准化应用设计。</p>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-300">•</span>
                  <p>针对细分场景优化解决方案，实现"点菜定义产品"。</p>
                </li>
              </ul>
            </div>
          </div>

          {/* 生态网络与产业协同赋能 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4 flex h-36 w-36 items-center justify-center rounded-full border-2 border-dashed border-blue-300 bg-white p-4">
              <div className="absolute inset-1 rounded-full border border-blue-200"></div>
              <p className="text-center text-base font-medium text-blue-900">生态网络与产业协同赋能</p>
            </div>
            <div className="bg-indigo-800 p-6 text-white h-80 w-56 overflow-y-auto rounded-lg">
              <ul className="space-y-4 text-base">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-300">•</span>
                  <p>搭建"EOS开源开放产业链联盟"，联动上下游主体，共建全链路生态体系。</p>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-300">•</span>
                  <p>推动国产智能硬件与开源平台协同发展，实现资源协同与成果共赢。</p>
                </li>
              </ul>
            </div>
          </div>

          {/* 教育课程与竞赛体系沉淀 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4 flex h-36 w-36 items-center justify-center rounded-full border-2 border-dashed border-blue-300 bg-white p-4">
              <div className="absolute inset-1 rounded-full border border-blue-200"></div>
              <p className="text-center text-base font-medium text-blue-900">教育课程与竞赛体系沉淀</p>
            </div>
            <div className="bg-indigo-800 p-6 text-white h-80 w-56 overflow-y-auto rounded-lg">
              <ul className="space-y-4 text-base">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-300">•</span>
                  <p>构建教育课程与竞赛体系沉淀。</p>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-300">•</span>
                  <p>构建中小学研究院所课程体系，支持多维种相关区域共享。</p>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-300">•</span>
                  <p>设立"EOS挑战赛"，以赛实任务驱动能力训练，形成教育矩。</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    </main>
  );
}