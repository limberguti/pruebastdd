import { defineFeature, loadFeature } from "jest-cucumber";
import { error } from "console";
import updateReq from "./updateReq";
import { expect } from "@jest/globals";

const feature = loadFeature("src/PruebasTDD/updateReq/updateReq.feature");

const reqService = new updateReq();

defineFeature(feature, (test) => {
  test("Actualizar requerimiento existente correctamente", ({
    given,
    when,
    then,
  }) => {
    let idrequerimiento: number;

    given(
      /^existe un requerimiento con ID (\d+) en la base de datos$/,
      async (id: string) => {
        idrequerimiento = parseInt(id);
      }
    );

    when(
      /^se actualiza el requerimiento con ID (\d+) con datos actualizados$/,
      async (id) => {
        const datosActualizados = {
          SEDE: "Matriz",
          DEPARTAMENTO: "DEPARTAMENTO DE CIENCIAS DE LA COMPUTACION",
          DENOMINACION: "PERSONAL DE APOYO ACADÉMICO TÉCNICO DOCENTE A",
          DEDICACION: "MEDIO TIEMPO",
        };
        const mensaje = await reqService.actualizarRequerimiento(
          idrequerimiento,
          datosActualizados
        );
        expect(mensaje).toEqual("Requerimiento actualizado correctamente");
      }
    );

    then("se debería recibir un mensaje de éxito", async () => {
      const requerimientoActualizado =
        await reqService.obtenerRequerimientoPorID(idrequerimiento);
      expect(requerimientoActualizado.SEDE).toEqual("Matriz");
      expect(requerimientoActualizado.DEPARTAMENTO).toEqual(
        "DEPARTAMENTO DE CIENCIAS DE LA COMPUTACION"
      );
      expect(requerimientoActualizado.DENOMINACION).toEqual(
        "PERSONAL DE APOYO ACADÉMICO TÉCNICO DOCENTE A"
      );
      expect(requerimientoActualizado.DEDICACION).toEqual("MEDIO TIEMPO");
    });
  });

  test("Intentar actualizar requerimiento inexistente", ({
    given,
    when,
    then,
  }) => {
    let idrequerimiento: number;
    given(
      /^no existe un requerimiento con ID (\d+) en la base de datos$/,
      async (id: string) => {
        idrequerimiento = parseInt(id);
        try {
          await reqService.obtenerRequerimientoPorID(parseInt(id));
        } catch (error) {
          return;
        }
        throw new Error(
          `El requerimiento con ID ${id} ya existe en la base de datos`
        );
      }
    );

    when(
      /^se intenta actualizar el requerimiento con ID (\d+)$/,
      async (id: string) => {
        const datosActualizados = {
          SEDE: "Matriz",
          DEPARTAMENTO: "DEPARTAMENTO DE CIENCIAS DE LA COMPUTACION",
          DENOMINACION: "PERSONAL DE APOYO ACADÉMICO TÉCNICO DOCENTE A",
          DEDICACION: "MEDIO TIEMPO",
        };
        try {
          const mensaje = await reqService.actualizarRequerimiento(
            parseInt(id),
            datosActualizados
          );
          expect(mensaje).toEqual("requerimiento inexistente");
        } catch (error) {
          return;
        }
        throw new Error(
          `Se esperaba un error al intentar actualizar el requerimiento con ID ${id}`
        );
      }
    );

    then("se debería recibir un mensaje de error", async () => {
    });
  });
});
