import React from "react";
import { useParams } from "react-router-dom";
import Id from "../../randomKey/Id";
import Page from "../Page";
import proxy from "../../model/proxy";

export const EditForm = () => {

    let params = useParams();

    let familias = proxy.familia.all();

    let familiasOptions = familias.map((familia) => {
        return (
            <option key={Id.generate()} value={familia.id}>
                {familia.nombre}
            </option>
        );
    });

    let soda = proxy.soda.show(params.sodaId);

    return (
        <Page>
            <form>
                <input type="text" id="marca" defaultValue={soda.marca} />
                <input type="text" id="sabor" defaultValue={soda.sabor} />
                <textarea>
                    {soda.descripcion}
                </textarea>
                <select defaultValue={soda.familia.id}>
                    {familiasOptions}
                </select>
            </form>
        </Page>
    );
};

export default EditForm;