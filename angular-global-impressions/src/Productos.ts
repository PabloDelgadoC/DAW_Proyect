export class Productos {

    private _detalle: string;
    private _tipo: string;
    private _precio: number;
    private _image_path: string;


    
    constructor(_detalle:string, _tipo:string, _precio:number, _image_path:string){
        this._detalle = _detalle;
        this._tipo = _tipo;
        this._precio = _precio;
        this._image_path = _image_path;
    }
  
    set detalle(_detalle:string) {this._detalle = _detalle;}
    get detalle() {return this._detalle;}
  
    set tipo(_tipo:string) {this._tipo = _tipo;}
    get tipo() {return this._tipo;}

    set precio(_precio:number) {this._precio = _precio;}
    get precio() {return this._precio;}
  
    set image_path(_image_path:string) {this._image_path = _image_path;}
    get image_path() {return this._image_path;}
    
    renderizarPlantilla():string {
      return `
          <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ${this.tipo}">
					<!-- Block2 -->
					<div class="block2">
						<div class="block2-pic hov-img0">
							<img src="${this.image_path}" alt="IMG-PRODUCT">

							
						</div>

						<div class="block2-txt flex-w flex-t p-t-14">
							<div class="block2-txt-child1 flex-col-l ">
								<a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
									${this.detalle}
								</a>

								<span class="stext-105 cl3">
									$${this.precio.toPrecision(4)}
								</span>
							</div>

							<div class="block2-txt-child2 flex-r p-t-3">
								<a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
									<img class="icon-heart1 dis-block trans-04" src="assets/icons/icon-heart-01.png" alt="ICON">
									<img class="icon-heart2 dis-block trans-04 ab-t-l" src="assets/icons/icon-heart-02.png" alt="ICON">
								</a>
							</div>
						</div>
					</div>
                </div>
            </div>
          
          `
    }
  
  }