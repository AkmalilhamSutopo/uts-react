import React, { Component, Fragment } from "react";

class Food extends Component {
  render() {
    return (
      <Fragment>
        <div>
          {/* KATEGORI */}
          <div className="judul mt-4 mb-4">
            <h3 className="font-weight-bold">Kategori</h3>
          </div>
          <div className="kategori pilihan">
            <div className="atas d-flex">
              <div className="container p-0">
                <a href="Home.jsx">
                  <div className="isi">
                    <img
                      src="https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg"
                      class="edgeimage d-block"
                      style={{ width: "100%", filter: "brightness(50%)" }}
                      alt="..."
                    />
                    <div className="centered">Semua</div>
                  </div>
                </a>
              </div>
              <div className="container p-0">
                <a href="">
                  <div className="isi">
                    <img
                      src="https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/phut_0.jpg?itok=h30EAnkk"
                      class="edgeimage d-block"
                      style={{ width: "100%", filter: "brightness(50%)" }}
                      alt="..."
                    />
                    <div className="centered">Pizza</div>
                  </div>
                </a>
              </div>
              <div className="container p-0">
                <a href="">
                  <div className="isi">
                    <img
                      src="https://www.helpguide.org/wp-content/uploads/fast-foods-candy-cookies-pastries-768.jpg"
                      class="edgeimage d-block"
                      style={{ width: "100%", filter: "brightness(50%)" }}
                      alt="..."
                    />
                    <div className="centered">Burger</div>
                  </div>
                </a>
              </div>
              <div className="container p-0">
                <a href="">
                  <div className="isi">
                    <img
                      src="https://www.acure-fun.net/lounge/assets_c/2019/12/19Q3_12W2_juice_00-thumb-768xauto-2725.jpg"
                      class="edgeimage d-block"
                      style={{ width: "100%", filter: "brightness(50%)" }}
                      alt="..."
                    />
                    <div className="centered">Jus</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* END KATEGORI */}

          {/* POPULER */}
          <div className="judul mt-4 mb-1">
            <h3 className="font-weight-bold">Populer</h3>
          </div>
          <div className="row">
            <div className="col-sm-4 mt-3">
              <a href="">
                <div className="isimakan">
                  <img
                    src="https://www.koreanbapsang.com/wp-content/uploads/2017/09/DSC_1860-1024x685.jpg"
                    class="edgeimage d-block"
                    style={{ width: "100%" }}
                    alt="..."
                  />
                  <div className="bottom-left">25 - 30 min</div>
                </div>
              </a>
              <h6 className="ukuranjudul mt-3">4 Cheese</h6>
              <span className="ukurantext mt-1">
                <i class="far fa-star"></i> 4.7
              </span>
              <span className="ukurantext ml-4">Rp 130.000</span>
            </div>
            <div className="col-sm-4 mt-3">
              <a href="">
                <div className="isimakan">
                  <img
                    src="https://philadelphia.cbslocal.com/wp-content/uploads/sites/15116066/2016/03/shepherdspie.jpg?w=625"
                    class="edgeimage d-block"
                    style={{ width: "100%" }}
                    alt="..."
                  />
                  <div className="bottom-left">30 - 35 min</div>
                </div>
              </a>
              <h6 className="ukuranjudul mt-3">Philadelphia</h6>
              <span className="ukurantext mt-1">
                <i class="far fa-star"></i> 4.5
              </span>
              <span className="ukurantext ml-4">Rp 250.000</span>
            </div>
            <div className="col-sm-4 mt-3">
              <a href="">
                <div className="isimakan">
                  <img
                    src="https://img.okezone.com/content/2018/10/09/298/1961736/yuk-bikin-pizza-mozzarella-dan-baked-macaroni-kudapan-spesial-untuk-anak-dan-suami-Ypnzwt7Bhy.jpg"
                    class="edgeimage d-block"
                    style={{ width: "100%" }}
                    alt="..."
                  />
                  <div className="bottom-left">40 - 46 min</div>
                </div>
              </a>
              <h6 className="ukuranjudul mt-3">Mozarella</h6>
              <span className="ukurantext mt-1">
                <i class="far fa-star"></i> 4.6
              </span>
              <span className="ukurantext ml-4">Rp 175.000</span>
            </div>
            <div className="col-sm-4 mt-3">
              <a href="">
                <div className="isimakan">
                  <img
                    src="https://s0.bukalapak.com/uploads/content_attachment/f977148d24e30b743df3f2b5/w-744/foto_thumbnail_ayam_penyet.jpg"
                    class="edgeimage d-block"
                    style={{ width: "100%" }}
                    alt="..."
                  />
                  <div className="bottom-left">50 - 55 min</div>
                </div>
              </a>
              <h6 className="ukuranjudul mt-3">Ayam Penyet</h6>
              <span className="ukurantext mt-1">
                <i class="far fa-star"></i> 4.8
              </span>
              <span className="ukurantext ml-4">Rp 35.000</span>
            </div>

            <div className="col-sm-4 mt-3">
              <a href="">
                <div className="isimakan">
                  <img
                    src="https://kbu-cdn.com/dk/wp-content/uploads/burger-ayam-bumbu-pedas.jpg"
                    class="edgeimage d-block"
                    style={{ width: "100%" }}
                    alt="..."
                  />
                  <div className="bottom-left">3 - 4 min</div>
                </div>
              </a>
              <h6 className="ukuranjudul mt-3">Burger Mini</h6>
              <span className="ukurantext mt-1">
                <i class="far fa-star"></i> 4.6
              </span>
              <span className="ukurantext ml-4">Rp 10.000</span>
            </div>

            <div className="col-sm-4 mt-3">
              <a href="">
                <div className="isimakan">
                  <img
                    src="https://img-global.cpcdn.com/recipes/7369e12b717fc0e6/751x532cq70/salad-sayur-foto-resep-utama.jpg"
                    class="edgeimage d-block"
                    style={{ width: "100%" }}
                    alt="..."
                  />
                  <div className="bottom-left">5 - 10 min</div>
                </div>
              </a>
              <h6 className="ukuranjudul mt-3">Salad Sayur</h6>
              <span className="ukurantext mt-1">
                <i class="far fa-star"></i> 4.4
              </span>
              <span className="ukurantext ml-4">Rp 15.000</span>
            </div>

            <div className="col-sm-4 mt-3">
              <a href="">
                <div className="isimakan">
                  <img
                    src="https://merahputih.com/media/75/8b/4f/758b4fd40cf93e03a6170296d7184d86.png"
                    class="edgeimage d-block"
                    style={{ width: "100%" }}
                    alt="..."
                  />
                  <div className="bottom-left">5 - 7 min</div>
                </div>
              </a>
              <h6 className="ukuranjudul mt-3">Jus Mangga Kekinian</h6>
              <span className="ukurantext mt-1">
                <i class="far fa-star"></i> 4.5
              </span>
              <span className="ukurantext ml-4">Rp 12.000</span>
            </div>

            <div className="col-sm-4 mt-3">
              <a href="">
                <div className="isimakan">
                  <img
                    src="https://cdn-2.tstatic.net/style/foto/bank/images/jus-alpukat-jaman-now_20171115_233912.jpg"
                    class="edgeimage d-block"
                    style={{ width: "100%" }}
                    alt="..."
                  />
                  <div className="bottom-left">6 - 7 min</div>
                </div>
              </a>
              <h6 className="ukuranjudul mt-3">Jus Alpukat++</h6>
              <span className="ukurantext mt-1">
                <i class="far fa-star"></i> 4.4
              </span>
              <span className="ukurantext ml-4">Rp 12.000</span>
            </div>

            <div className="col-sm-4 mt-3">
              <a href="">
                <div className="isimakan">
                  <img
                    src="https://cdn-radar.jawapos.com/uploads/radarkediri/news/2020/04/09/salad-sayur-demi-sehat-pakai-hidroponik_m_188107.jpg"
                    class="edgeimage d-block"
                    style={{ width: "100%" }}
                    alt="..."
                  />
                  <div className="bottom-left">13 - 24 min</div>
                </div>
              </a>
              <h6 className="ukuranjudul mt-3">Salad Sayur Medium</h6>
              <span className="ukurantext mt-1">
                <i class="far fa-star"></i> 4.7
              </span>
              <span className="ukurantext ml-4">Rp 25.000</span>
            </div>
          </div>
          {/* END POPULER */}
        </div>
      </Fragment>
    );
  }
}
export default Food;
