
import { Observable } from "../observable/observable.js";
import { id }         from "../church/church.js";

export { Attribute }

const Attribute = value => {

    const valueObs = Observable(value);
    const validObs = Observable(true);
    const dirtyObs = Observable(false);

    let cleanValue = value;

    const setValue = value => {
        if (!dirtyObs.getValue()) {
            cleanValue = valueObs.getValue();
        }
        valueObs.setValue(value);
        dirtyObs.setValue(true);
    };

    const save = () => {
        dirtyObs.setValue(false);
    };

    const reset = () => {
        if (dirtyObs.getValue()) {
            valueObs.setValue(cleanValue);
            save();
        }
    }

    let   converter = id;
    const setConverter      = newConverter => {
        converter = newConverter;
        setConvertedValue(valueObs.getValue());
    }
    const setValidator      = validator    => valueObs.onChange(newVal => validObs.setValue(validator(newVal)));
    const setConvertedValue = newValue     => setValue(  converter(newValue) );

    return { valueObs, validObs, dirtyObs, setConverter, setValidator, setValue, setConvertedValue, save, reset }
};
