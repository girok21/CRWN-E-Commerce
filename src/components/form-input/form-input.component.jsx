import {Group, Input, FormInputLabel} from './form-input.styles.jsx';
const FormInput = ( {label, ...otherProps} ) => {
    return(
        <Group>
            <Input { ...otherProps }/>
            {label && (
                <FormInputLabel 
                shrink = {otherProps.value.length}
                className = {`${
                    otherProps.value.length ? 'shrink': ''
                    } form-input-label`}
                >
                    {label}
                </FormInputLabel>
            )}
        </Group>
    );
};

export default FormInput;