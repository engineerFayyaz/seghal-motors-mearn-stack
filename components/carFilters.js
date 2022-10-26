const CarFilterModal = () => {
  return (
    <div
      id="CarFilterModal"
      className="get-car-name in modal fade"
      role="dialog"
    >
      <div className="modal-dialog" style={{ width: "902px" }}>
        <div className="modal-content">
          <div className="modal-body clearfix">
            <div className="col col-3 cat-selection makes pull-left active">
              <div className="header-car-info arrow-right">Make</div>
              <div className="form-group nomargin">
                <h5 className="listing-title">Popular</h5>
                <ul className="fs14 get-listing make-listings">
                  <li
                    className="make"
                    data-url="audi"
                    data-make={4}
                    onclick="GetMakeID(this)"
                    id="make-4"
                  >
                    <a href="javascript:void(0)">
                      Audi <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="adam"
                    data-make={20}
                    onclick="GetMakeID(this)"
                    id="make-20"
                  >
                    <a href="javascript:void(0)">
                      Adam <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="bmw"
                    data-make={5}
                    onclick="GetMakeID(this)"
                    id="make-5"
                  >
                    <a href="javascript:void(0)">
                      BMW <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="baic"
                    data-make={49}
                    onclick="GetMakeID(this)"
                    id="make-49"
                  >
                    <a href="javascript:void(0)">
                      BAIC <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="chevrolet"
                    data-make={23}
                    onclick="GetMakeID(this)"
                    id="make-23"
                  >
                    <a href="javascript:void(0)">
                      Chevrolet <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="chery"
                    data-make={22}
                    onclick="GetMakeID(this)"
                    id="make-22"
                  >
                    <a href="javascript:void(0)">
                      Chery <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="changan"
                    data-make={21}
                    onclick="GetMakeID(this)"
                    id="make-21"
                  >
                    <a href="javascript:void(0)">
                      Changan <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="daehan"
                    data-make={38}
                    onclick="GetMakeID(this)"
                    id="make-38"
                  >
                    <a href="javascript:void(0)">
                      Daehan <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="dfsk"
                    data-make={26}
                    onclick="GetMakeID(this)"
                    id="make-26"
                  >
                    <a href="javascript:void(0)">
                      DFSK <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="datsun"
                    data-make={25}
                    onclick="GetMakeID(this)"
                    id="make-25"
                  >
                    <a href="javascript:void(0)">
                      Datsun <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="daewoo"
                    data-make={24}
                    onclick="GetMakeID(this)"
                    id="make-24"
                  >
                    <a href="javascript:void(0)">
                      Daewoo <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="daihatsu"
                    data-make={6}
                    onclick="GetMakeID(this)"
                    id="make-6"
                  >
                    <a href="javascript:void(0)">
                      Daihatsu <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="ford"
                    data-make={43}
                    onclick="GetMakeID(this)"
                    id="make-43"
                  >
                    <a href="javascript:void(0)">
                      Ford <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="fiat"
                    data-make={28}
                    onclick="GetMakeID(this)"
                    id="make-28"
                  >
                    <a href="javascript:void(0)">
                      Fiat <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="faw"
                    data-make={27}
                    onclick="GetMakeID(this)"
                    id="make-27"
                  >
                    <a href="javascript:void(0)">
                      FAW <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="hyundai"
                    data-make={18}
                    onclick="GetMakeID(this)"
                    id="make-18"
                  >
                    <a href="javascript:void(0)">
                      Hyundai <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="honda"
                    data-make={19}
                    onclick="GetMakeID(this)"
                    id="make-19"
                  >
                    <a href="javascript:void(0)">
                      Honda <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="isuzu"
                    data-make={37}
                    onclick="GetMakeID(this)"
                    id="make-37"
                  >
                    <a href="javascript:void(0)">
                      Isuzu <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="haval"
                    data-make={48}
                    onclick="GetMakeID(this)"
                    id="make-48"
                  >
                    <a href="javascript:void(0)">
                      Haval <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="hino"
                    data-make={39}
                    onclick="GetMakeID(this)"
                    id="make-39"
                  >
                    <a href="javascript:void(0)">
                      Hino <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="jw-forland"
                    data-make={42}
                    onclick="GetMakeID(this)"
                    id="make-42"
                  >
                    <a href="javascript:void(0)">
                      JW Forland <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="jmc"
                    data-make={41}
                    onclick="GetMakeID(this)"
                    id="make-41"
                  >
                    <a href="javascript:void(0)">
                      JMC <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="jinbel"
                    data-make={50}
                    onclick="GetMakeID(this)"
                    id="make-50"
                  >
                    <a href="javascript:void(0)">
                      Jinbel <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="jac"
                    data-make={40}
                    onclick="GetMakeID(this)"
                    id="make-40"
                  >
                    <a href="javascript:void(0)">
                      JAC <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="jeep"
                    data-make={8}
                    onclick="GetMakeID(this)"
                    id="make-8"
                  >
                    <a href="javascript:void(0)">
                      Jeep <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="jaguar"
                    data-make={7}
                    onclick="GetMakeID(this)"
                    id="make-7"
                  >
                    <a href="javascript:void(0)">
                      Jaguar <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="kia"
                    data-make={29}
                    onclick="GetMakeID(this)"
                    id="make-29"
                  >
                    <a href="javascript:void(0)">
                      KIA <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="land-rover"
                    data-make={30}
                    onclick="GetMakeID(this)"
                    id="make-30"
                  >
                    <a href="javascript:void(0)">
                      Land Rover <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="lexus"
                    data-make={31}
                    onclick="GetMakeID(this)"
                    id="make-31"
                  >
                    <a href="javascript:void(0)">
                      Lexus <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="lamborghini"
                    data-make={9}
                    onclick="GetMakeID(this)"
                    id="make-9"
                  >
                    <a href="javascript:void(0)">
                      Lamborghini <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="mg"
                    data-make={44}
                    onclick="GetMakeID(this)"
                    id="make-44"
                  >
                    <a href="javascript:void(0)">
                      MG <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="mercedes"
                    data-make={11}
                    onclick="GetMakeID(this)"
                    id="make-11"
                  >
                    <a href="javascript:void(0)">
                      Mercedes <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="mitsubishi"
                    data-make={13}
                    onclick="GetMakeID(this)"
                    id="make-13"
                  >
                    <a href="javascript:void(0)">
                      Mitsubishi <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="maserati"
                    data-make={51}
                    onclick="GetMakeID(this)"
                    id="make-51"
                  >
                    <a href="javascript:void(0)">
                      Maserati <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="mushtaq"
                    data-make={52}
                    onclick="GetMakeID(this)"
                    id="make-52"
                  >
                    <a href="javascript:void(0)">
                      Mushtaq <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="mclaren"
                    data-make={53}
                    onclick="GetMakeID(this)"
                    id="make-53"
                  >
                    <a href="javascript:void(0)">
                      McLaren <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="mazda"
                    data-make={10}
                    onclick="GetMakeID(this)"
                    id="make-10"
                  >
                    <a href="javascript:void(0)">
                      Mazda <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="nissan"
                    data-make={14}
                    onclick="GetMakeID(this)"
                    id="make-14"
                  >
                    <a href="javascript:void(0)">
                      Nissan <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="porsche"
                    data-make={32}
                    onclick="GetMakeID(this)"
                    id="make-32"
                  >
                    <a href="javascript:void(0)">
                      Porsche <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="peugeot"
                    data-make={54}
                    onclick="GetMakeID(this)"
                    id="make-54"
                  >
                    <a href="javascript:void(0)">
                      Peugeot <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="proton"
                    data-make={45}
                    onclick="GetMakeID(this)"
                    id="make-45"
                  >
                    <a href="javascript:void(0)">
                      Proton <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="range-rover"
                    data-make={33}
                    onclick="GetMakeID(this)"
                    id="make-33"
                  >
                    <a href="javascript:void(0)">
                      Range Rover <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="suzuki"
                    data-make={3}
                    onclick="GetMakeID(this)"
                    id="make-3"
                  >
                    <a href="javascript:void(0)">
                      Suzuki <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="sogo"
                    data-make={34}
                    onclick="GetMakeID(this)"
                    id="make-34"
                  >
                    <a href="javascript:void(0)">
                      Sogo <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="subaru"
                    data-make={35}
                    onclick="GetMakeID(this)"
                    id="make-35"
                  >
                    <a href="javascript:void(0)">
                      Subaru <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="toyota"
                    data-make={1}
                    onclick="GetMakeID(this)"
                    id="make-1"
                  >
                    <a href="javascript:void(0)">
                      Toyota <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="united"
                    data-make={36}
                    onclick="GetMakeID(this)"
                    id="make-36"
                  >
                    <a href="javascript:void(0)">
                      United <i className="fa fa-angle-right" />
                    </a>
                  </li>
                  <li
                    className="make"
                    data-url="volkswagen"
                    data-make={16}
                    onclick="GetMakeID(this)"
                    id="make-16"
                  >
                    <a href="javascript:void(0)">
                      Volkswagen <i className="fa fa-angle-right" />
                    </a>
                  </li>
                </ul>
                <h5 className="listing-title">Others</h5>
                <ul className="fs14 get-listing make-listings"></ul>
              </div>
            </div>
            <div className="col col-3 cat-selection models pull-left">
              <div className="header-car-info arrow-right">Model</div>
              <div className="form-group nomargin">
                <ul
                  className="model-listings fs14 get-listing models_for_42"
                  id="CarModelArea"
                  style={{ display: "none" }}
                />
              </div>
            </div>
            <div className="col col-3 cat-selection versions pull-left">
              <div className="header-car-info arrow-right">Version</div>
              <div className="form-group nomargin version-listings-outer">
                <ul
                  className="fs14 get-listing version-listings"
                  id="CarVersionArea"
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <a
              href="javascript:void(0)"
              id="SubmitBtn"
              className="btn btn-primary"
              disabled="disabled"
            >
              Done
            </a>
            <button className="btn btn-danger" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarFilterModal;
